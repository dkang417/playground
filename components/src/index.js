import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';

const App = () => {
    return (
        <div className="ui container comments">
            <CommentDetail author="Sam" timeAgo="Today at 4:35PM" text="Can anyone make it out to my Christmas party???" avatar={faker.image.avatar()}/>
            <CommentDetail author="Alex"  timeAgo="Today at 2:00AM" text="I think i can make it to the party" avatar={faker.image.avatar()} />
            <CommentDetail author="Matthew" timeAgo="Today at 8:00PM" text="i will def come" avatar={faker.image.avatar()} />
        </div>
    );

};

ReactDOM.render(<App />, document.querySelector('#root'));

