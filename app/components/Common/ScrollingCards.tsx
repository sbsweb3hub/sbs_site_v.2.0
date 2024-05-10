import LoadCard from "./LoadingCard"
import ProjectCard from "./ProjectCard"

const ScrollingCards = () => {
    return (
        <div
            style={{
                maxWidth: '100%',
                overflowX: 'auto',
                padding: '4px',
                display: 'flex',
                alignItems: 'flex-start',
                msOverflowStyle: 'none',
                scrollbarWidth: 'none',
                marginLeft: '0px'

            }}
            className="gap-[0px]"
        >
            {/* <ProjectCard isFunded={false}/>
           <ProjectCard isFunded={false}/>
           <ProjectCard isFunded={false}/>
           <ProjectCard isFunded={false}/>
           <ProjectCard isFunded={false}/>
           <ProjectCard isFunded={false}/> */}
        </div>
    )
}

export default ScrollingCards
