import ListContextProvider from 'contexts/ListContext'
import useList from 'hooks/useList'
import { Post } from 'types/Post'
import { Project } from 'types/Project'
import LayoutTable from './LayoutTable'
import styles from './styles/List.module.css'
import ArrowIcon from 'public/svg/ArrowIcon.svg'
import { useRouter } from 'next/router'

const ListItem = ({ item, index, pathPrefix }: { item: Project | Post, index: number, pathPrefix: string }) => {
    const { selected, setSelected } = useList()
    const { push } = useRouter()

    const selectedStyle = selected || selected === 0 ? (selected === index ? undefined: styles.unselected) : undefined

    const onMouseEnter = () => {
        setSelected(index)
    }

    const onMouseLeave = () => {
        setSelected(null)
    }

    return (
        <tr className={styles.row} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} onClick={() => push(`${pathPrefix}/${item.id}`)}>
            <td className={styles.content}>
                <div className={styles.first}>
                    <div className={styles.index}>
                        {index < 10 ? `0${index}` : index}
                    </div>
                    <div className={styles.title}>
                        <p className={styles.titleParagraph} id={selectedStyle}>{item.title}<ArrowIcon /></p>
                    </div>
                </div>
                <div className={styles.date}>
                    <p className={styles.dateParagraph} id={selectedStyle}>{new Date(item.date).toLocaleDateString()}</p>
                </div>

            </td>
        </tr>
    )
}

const RightContent = ({ data, pathPrefix }: { data: Project[] | Post[], pathPrefix: string }) => {

    return (
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            {data.map((item, index) => (
                <ListItem key={item.id} item={item} index={index} pathPrefix={pathPrefix}/>
            ))}
        </table>
    )
}

const List = ({ data, pathPrefix, name }: { data: Project[] | Post[], pathPrefix: string, name: string }) => {
    return (
        <div className={styles.container}>
            <ListContextProvider>
                <LayoutTable 
                    leftContent={name}
                    rightContent={
                        <div style={{ width: '100%' }}>
                            <RightContent data={data} pathPrefix={pathPrefix} />
                        </div>
                    }
                />
            </ListContextProvider>
        </div>
    )
}

export default List