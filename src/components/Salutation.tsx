type Props = {
    salutation: string;
    emoje: string;
}

export const Salutation = ({ salutation, emoje }: Props) => {


    return (
        <h1 className=" text-primary bg-primary/20 inline-block  rounded-md  font-semibold text-md lg:text-lg uppercase px-2 py-1"><span className="mr-2">{emoje}</span>{salutation}</h1>
    )
};