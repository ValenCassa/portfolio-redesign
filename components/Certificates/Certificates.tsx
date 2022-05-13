import { ContactLink } from "components/Contact/Contact"
import SectionContainer from "components/Containers/SectionContainer"
import { HorizontalDivider } from "components/Miscellaneous/Divider"
import LayoutTable from "components/Miscellaneous/LayoutTable"

const Certificates = () => {
    return (
        <>
        <SectionContainer>
            <LayoutTable 
                leftContent='Certificates'
                rightContent={
                    <>
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '0.5em'
                    }}>
                        <ContactLink name="Full Stack" href='https://studies.cs.helsinki.fi/stats/api/certificate/fullstackopen/en/8b91820aa6747bc3e47d0811e6daf368' />
                        <ContactLink name="GraphQL" href='https://studies.cs.helsinki.fi/stats/api/certificate/fs-graphql/en/1eab945ff92d9a4876912425db47c6e6' />
                        <ContactLink name="Typescript" href='https://studies.cs.helsinki.fi/stats/api/certificate/fs-typescript/en/5660e462f652bd577187f2b1210f4350' />
                        <ContactLink name="PostgreSQL" href='https://studies.cs.helsinki.fi/stats/api/certificate/fs-psql/en/edb6bc27ab72a72618c93f39f44b1c07' />
                    </div>                    
                    </>
                }
            />
        </SectionContainer>
        <HorizontalDivider backgroundColor="var(--box-color)" />
        </>
    )
}

export default Certificates