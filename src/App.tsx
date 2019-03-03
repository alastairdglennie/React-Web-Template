import * as React from 'react';

const styles = require('./App.css');

type AppProps = {}
type AppState = {}

class App extends React.Component<AppProps, AppState> {
    constructor(props: AppProps) {
        super(props);
    }

    render() {
        return (
            <div className={styles['App']}>
                add some content
            </div>
        );
    }
}

export default App;