type Props = {
    emoje: string;
    description: string;
}

export const AboutMe = ({ emoje, description }: Props) => {


    return (
        <p className="text-primary/90 font-semibold bg-primary/10  p-1 rounded-md mt-5 text-sm text-wrap text-left"><span className="mr-1">{emoje}</span>{description}</p>
    )
};