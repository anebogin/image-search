import React, {PureComponent} from 'react';
import {
    View, Text, TextInput, StatusBar
} from 'react-native';
import {connect} from 'react-redux';
import debounce from 'lodash.debounce';

import SearchActions from '../../../redux/SearchRedux';
import styles from './Search.styles';
import List from '../components/List';

class Search extends PureComponent {
    searchDelayed = debounce(query => this.search(query), 2000)

    constructor(props) {
        super(props);

        this.state = {
            query: props.search.query
        };
    }

    handleOnChangeText = (query) => {
        this.setState({query}, () => {
            this.searchDelayed(query);
        });
    }

    handleOnPressItem = (item) => {
        const {navigation} = this.props;
        navigation.navigate('Details', {item});
    }

    search(query) {
        const {searchRequest} = this.props;
        searchRequest(query);
    }

    render() {
        const {query} = this.state;
        const {search: {items}} = this.props;
        return (
            <View style={styles.container}>
                <StatusBar backgroundColor="#fafafa" barStyle="dark-content" />
                <Text style={styles.title}>Image search</Text>
                <TextInput
                    value={query}
                    onChangeText={this.handleOnChangeText}
                    placeholder="Search"
                    style={styles.input}
                    underlineColorAndroid="transparent"
                />
                {items.length > 0 ? <List items={items} onPressItem={this.handleOnPressItem} /> : null}
            </View>
        );
    }
}

const mapStateToProps = state => ({
    search: state.search,
});

const mapDispatchToProps = dispatch => ({
    searchRequest: query => dispatch(SearchActions.searchRequest(query)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);
