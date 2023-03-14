import React from 'react';
import {charaters} from "../utils/constants";
import Friend from "./Friend";
interface Props{
    hero: string
}
const Friends: React.FC<Props> = (props) => {
    const friendsWithOutHero = charaters.filter(item => item !== props.hero);
    return (
        <section className="float-end row border border-dark rounded-bottom w-50 m-1">
            <h3 className="col-12 text-center">Dream Team</h3>
            {friendsWithOutHero.map((item, index) => {
                if (index === 6)
                    return <Friend friend={item} key={index} mystyle='bottom-left '/>
                else if (index === 8)
                    return <Friend friend={item} key={index} mystyle='bottom-right '/>
                else
                    return <Friend friend={item} key={index} mystyle={''}/>
            })}
        </section>
    );
};

export default Friends;