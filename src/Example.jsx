import React from 'react';
import PropTypes from 'prop-types';

const Tab = ({ value, selected, onClick }) => (
    <button
        type='button'
        disabled={selected}
        onClick={onClick}
        style={{
            borderRadius: '4px 4px 0 0',
            marginRight: 5,
            background: selected ? '#fff' : '#f8f8f8',
            border: '1px solid #eaeefb',
            borderBottom: selected ? '1px solid #fff' : '1px solid #eaeefb',
            cursor: selected ? 'default' : 'pointer',
            padding: '10px 15px',
            color: '#333',
        }}
    >
        {value}
    </button>
);

Tab.propTypes = {
    value: PropTypes.string.isRequired,
    selected: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired,
};

export class Example extends React.Component {
    static propTypes = {
        values: PropTypes.array.isRequired,
        children: PropTypes.node.isRequired,
    };

    constructor(props) {
        super(props);

        this.state = {
            listValues: props.values,
            setValue: null,
        };
    }

    renderTabs() {
        const { listValues, setValue } = this.state;

        return (
            <div style={{ boxShadow: '0 -1px 0 #eaeefb inset', marginBottom: 20 }}>
                <Tab
                    value='reset'
                    selected={setValue === null}
                    onClick={() => this.setState({ setValue: null })}
                />
                {listValues.map(value => (
                    <Tab
                        key={value}
                        value={value}
                        selected={setValue === value}
                        onClick={() => this.setState({ setValue: value })}
                    />
                ))}
            </div>
        );
    }

    render() {
        const { children } = this.props;
        const { setValue } = this.state;

        return (
            <div>
                {this.renderTabs()}
                {children(setValue)}
            </div>
        );
    }
}

Example.Box = ({ style, children }) => {
    const styles = Object.assign({
        background: '#41b885',
        border: '1px #fff solid',
        padding: '5px 10px',
        color: '#fff',
    }, style);

    return (
        <div style={styles}>
            {children}
        </div>
    );
};

Example.Box.propTypes = {
    style: PropTypes.object.isRequired,
    children: PropTypes.node.isRequired,
};
