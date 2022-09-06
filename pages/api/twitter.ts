import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";
import { ToadScheduler, AsyncTask, SimpleIntervalJob } from "toad-scheduler";

let followers = 153;
let following = 62;

const config = {
  headers: {
    Authorization: `Bearer ${process.env.TWITTER_KEY}`,
  },
};

const scheduler = new ToadScheduler();

const followersTask = new AsyncTask("followers", () =>
  axios
    .get(
      "https://api.twitter.com/2/users/1483912695292252160/followers",
      config
    )
    .then((res) => {
      followers = res.data.meta.result_count;
    })
);
const followersHandler = new SimpleIntervalJob({ minutes: 30 }, followersTask);

const followingTask = new AsyncTask("following", () =>
  axios
    .get(
      "https://api.twitter.com/2/users/1483912695292252160/following",
      config
    )
    .then((res) => {
      following = res.data.meta.result_count;
    })
);
const followingHandler = new SimpleIntervalJob({ minutes: 30 }, followingTask);

scheduler.addSimpleIntervalJob(followersHandler);
scheduler.addSimpleIntervalJob(followingHandler);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method } = req;

  if (method === "GET") {
    res.status(200).json({ followers, following });
  } else {
    res.status(405).end(`Method ${method} Not Allowed`);
  }
}
