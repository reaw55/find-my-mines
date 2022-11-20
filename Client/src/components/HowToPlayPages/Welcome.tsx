import React from "react";
import { GlobalContext } from "../../states";
import Image from "../Image";
import Loading from "../Loading";

export const Welcome = () => {
    const { global_state } = React.useContext(GlobalContext);
    const { name } = global_state;
    const [loading, setLoading] = React.useState<boolean>(true);
    return (
        <>
            <Loading visible={loading} />
            <div
                className={`m-auto text-white  ${
                    loading ? "opacity-0" : "opacity-100"
                }`}
            >
                <div className="text-3xl py-2 text-lime-400 mx-auto font-righteous">
                    WELCOME TO FIND MY MINES
                    <div className="text-3xl font-quicksand">
                        {name.toUpperCase()}
                    </div>
                </div>
                <div className="text-lg w-[90%] mx-auto">
                    In this game, two players take turns picking a grid to
                    locate the mines, and the one with mines worth the most
                    points wins!
                </div>
                <img
                    src="assets/images/clickshovel.png"
                    className="w-[35%] m-auto"
                    onLoad={() => {
                        setLoading(false);
                    }}
                    alt=""
                />
            </div>
        </>
    );
};

export default Welcome;
