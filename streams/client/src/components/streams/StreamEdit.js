import React from 'react';
import { connect } from 'react-redux';
import { fetchStream, editStream } from '../../actions';
import StreamForm from './StreamForm';


class StreamEdit extends React.Component  {
    componentDidMount() {
        this.props.fetchStream(this.props.match.params.id);
    }

    onSubmit = (formValues) => {
        this.props.editStream(this.props.match.params.id, formValues);
        
    };

    render() {
        console.log(this.props);
        if (!this.props.stream) {
            return <div>loading..</div>;
        }

        return (
            <div>
                <h1>Edit a stream!!!</h1>
                <StreamForm
                    initialValues={
                        {
                            title: this.props.stream.title,
                            description: this.props.stream.description
                        }
                    }    
                    onSubmit={this.onSubmit}
                />

            </div>
        );    

    }
}

// ownProps has access to props
const mapStateToProps = (state, ownProps) => {
    // console.log(ownProps);
    return { stream: state.streams[ownProps.match.params.id] };
}

export default connect(mapStateToProps, {fetchStream, editStream} )(StreamEdit);
