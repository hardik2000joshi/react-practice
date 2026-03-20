type UserProps ={
    name: string;
    description: string;
    value: number;
}
const UserCard = ({name, description, value}: UserProps) => {
    return(
        <div className="flex items-center max-w-sm gap-4 rounded-xl">
            <div className="text-xl font-medium text-blue bg-gray-100">
            <h2 className="text-gray-900 font-semibold text-base text-red-500 tracking-light">
                Components
            </h2>
            <p>
                Today we are studying about the components of react
            </p>
            <img src="https://d14lhgoyljo1xt.cloudfront.net/assets/caa38bdc6a_the-basic-structure-of-react-components.webp" alt="React Component image" />
            <p id="user">
                Componets are reusuable building blocks of an application used to create user interface(UI)
            </p>
        </div>
        <p>
                {name}  <br />
                {description}  <br />
                {value}
            </p>
        </div>
    )
}
export default UserCard;