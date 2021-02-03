import React from 'react';
import './App.css';
import EmojiContainer from './components/EmojiContainer/EmojiContainer';
import Search from "./components/Search/Search";


export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            emojiList: [],
            emojiItem: [],
            valueInput:'',

        }

    }

    componentDidMount() {
        this.loading()

    }

    loading = () => {
        fetch('https://raw.githubusercontent.com/sulemanof/js-lectures/master/react/emojiList.json')
            .then((response) => {
                return response.json()
            })
            .then(emojiList => {
                this.setState({
                    emojiList: emojiList,
                    emojiItem: emojiList.slice(0, 100),
                })

            });

    }

    search = (event) =>{
        const {emojiList}= this.state;
        const value = event.target.value.toLowerCase();
        const filterEmoji = emojiList.filter(emojiList=>{
            return emojiList.title.toLowerCase().includes(value)
        });
        this.setState({
            emojiItem:filterEmoji,
            valueInput:value,
        })
    }

    render() {
        return (
            <div>
                <Search value={ this.state.valueInput} update={this.search}/>
                <EmojiContainer emojiList={this.state.emojiItem}/>
            </div>
        );
    }
};

