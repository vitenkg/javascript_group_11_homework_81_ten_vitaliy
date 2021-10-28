import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {createShortUrl} from "../../store/actions/linksAction";


const NewLink = () => {
    const dispatch = useDispatch();
    const shortLinks = useSelector(state => state.links.shortUrl);
    const [state, setState] = useState('');

    const onSubmitHandler = (e) => {
        e.preventDefault()
        dispatch(createShortUrl(state));
    };

    const onChangeHandler = e => {
        const {value} = e.target;
        setState('https://' + value);
    };

    let links = null;

    if (shortLinks) {
        links = (
            <a href={shortLinks}>{shortLinks}</a>
        );
    };

    return (
        <div>
            <h1>Shorten Your link!</h1>

            <form onSubmit={onSubmitHandler}>
                <input
                    name="inputDate"
                    value={state}
                    onChange={onChangeHandler}
                />
                <p><button type="submit">Shorten!</button></p>
            </form>

            <p>{links}</p>
        </div>
    );
};

export default NewLink;