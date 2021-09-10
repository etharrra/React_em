import React from 'react';

// Example of using Context
const Content = React.createContext("React Is Fun!!!");

const MyContext = props => {
    return <Header />
}

const Header = props => {
    return <Title />
}

const Title = props => {
    const name = React.useContext(Content);
    return <h1>{name}</h1>
}

export default MyContext;