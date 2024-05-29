import { Projects } from "@/data/projects";


export const TechnologiesItems = () => {


    return (
        <div>
            {Projects.map((item => (
                <span>{item.technologies}</span>
            )))}
        </div>
    )
};