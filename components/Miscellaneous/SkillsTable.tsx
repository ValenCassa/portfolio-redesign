import styles from './styles/SkillsTable.module.css'

const SkillsTable = () => {
    return (
            <table className={styles.skillsTable}>
                <thead>
                    <tr>
                        <th>Front end</th>
                        <th>Back end</th>
                        <th>Tests</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>React</td>
                        <td>Node</td>
                        <td>Jest</td>
                    </tr>
                    <tr>
                        <td>Next</td>
                        <td>Mongo</td>
                        <td>Testing Library</td>
                    </tr>
                    <tr>
                        <td>Redux</td>
                        <td>Express</td>
                        <td>Cypress</td>
                    </tr>
                    <tr>
                        <td>Typescript</td>
                        <td>GraphQL</td>
                        <td>Storybook</td>
                    </tr>
                    <tr>
                        <td>React Native</td>
                        <td>PostgreSQL</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Cloudinary</td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Supabase</td>
                        <td></td>
                        <td></td>
                    </tr>
                </tbody>
            </table>
    )
}

export default SkillsTable