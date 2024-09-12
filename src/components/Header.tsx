import { Icon } from "@iconify/react/dist/iconify.js";

const Header = () => {
    return(
        <header className="w-full flex flex-row justify-between  h-16 items-center bg-red-400 shadow-x1">
        <Icon width={45} height={45}  icon="twemoji:grinning-cat" className = "px-1" />
          <span className ="text-5xl text-white">PetFamily</span>
          <Icon width={45} height={45} icon="twemoji:grinning-cat" className = "px-1" />
        </header>
    );
};

export {Header};