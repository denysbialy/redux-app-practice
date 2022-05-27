import React from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../../actions';

import CONSTANTS from '../../constants';
import translations from './translations.json';


const Header = (props) => {

    const { user, lang, changeLang, theme, changeTheme } = props;
    const { greatingText, guestName, changeLanguages } = translations[lang];
    const styles =
        theme === CONSTANTS.THEME.dark ?
            { backgroundColor: 'black', color: 'white' } :
            { backgroundColor: 'white', color: 'black' }

    const changeThemeHandler = () => {
        changeTheme(
            theme === CONSTANTS.THEME.light ?
                CONSTANTS.THEME.dark :
                CONSTANTS.THEME.light
        )
    }
    const options = Object.values(CONSTANTS.LANGUAGES).map((lang) => (
        <option key={lang} value={lang}>{translations[lang].optionText}</option>
    ))

    const handleSelect = ({ target: { value } }) => {
        changeLang(value)
    }
    return (
        <header style={styles}>
            <h1>My Site</h1>
            <h2>{greatingText} {" "}
                {user ? `${user.name} ${user.lastName}` : guestName}</h2>
            <label>{changeLanguages}
                <select value={lang} onChange={handleSelect}>
                    {options}
                </select>
            </label>
            <button onClick={changeThemeHandler}>Cменить тему</button>
        </header>

    );
}
const mStP = state => ({
    lang: state.lang.lang,
    theme: state.theme.theme,
});
const mDtP = dispatch => {
    return {
        changeLang: newLang => dispatch(actionCreators.changeLang(newLang)),
        changeTheme: theme => dispatch(actionCreators.changeTheme(theme)),
    }
}

export default connect(mStP, mDtP)(Header);
