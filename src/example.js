export class Example extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            listValues: props.values,
            setValue: null
        }
    }

    renderTab({ value, selected, onClick }) {
        return (
            <button
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
                    color: '#333'
                }}
            >
                {value}
            </button>
        );
    }

    renderTabs() {
        return (
            <div style={{ boxShadow: '0 -1px 0 #eaeefb inset', marginBottom: 20 }}>
                {this.renderTab({
                    value: 'reset',
                    selected: this.state.setValue === null,
                    onClick: () => this.setState({ setValue: null })
                })}
                {this.state.listValues.map((value) => {
                    return this.renderTab({
                        value,
                        selected: this.state.setValue === value,
                        onClick: () => this.setState({ setValue: value })
                    })
                })}
            </div>
        );
    }

    render() {
        return (
            <div>
                {this.renderTabs()}
                {this.props.children(this.state.setValue)}
            </div>
        )
    }
}

Example.Box = (props) => {
    const styles = Object.assign({
        background: '#41b885',
        border: '1px #fff solid',
        padding: '5px 10px',
        color: '#fff'
    }, props.style);

    return (
        <div style={styles}>
            {props.children}
        </div>
    );
}
