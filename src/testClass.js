import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      newCount: 0
    };
  }

  componentDidMount() {
    document.title = `Você clicou ${this.state.count} vezes`;
    console.log('efeito só no inicial')

    window.addEventListener('scroll', () => {
      console.log('scroll')
    })
  }

  // componentDidUpdate(prevProps, prevState) {
  componentDidUpdate(_, prevState) {
    document.title = `Você clicou ${this.state.count} vezes`;
    console.log('useEfect geral')

    // console.log('prevProps')
    // console.log(prevProps)
    // console.log('prevState')
    // console.log(prevState)

    if (prevState.count !== this.state.count) {
      console.log('atualizado o state.count')
    }

    if (prevState.newCount !== this.state.newCount) {
      console.log('atualizado o state.newCount')
    }
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', () => {
      console.log('scroll')
    })
  }

  multiplica = (e) => {
    this.setState({count: e.target.value})
  }

  render() {
    return (
      <div>
        <button
          onClick={() => this.setState({ count: this.state.count + 1 })}
        >
          clicar
        </button>
        <button
          onClick={() => this.setState({ newCount: this.state.newCount + 1 })}
        >
          clicar outro
        </button>

        <br/>
        <p>valor atual: {this.state.count}</p>

        <br/>
        <input type="text" onChange={(e) => this.multiplica(e)}/> 
      </div>
    );
  }
}

export default App