import React from 'react';

class AppClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      newCount: 0
    };

  }

  componentDidMount() {
    console.log('efeito só no inicial')

    window.addEventListener('scroll', () => {
      console.log('scroll')
    })
  }

  componentDidUpdate(_, prevState) {
    console.log('useEfect geral')

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

  render() {
    return (
    <React.Fragment>
      <button onClick={() => this.setState({ count: this.state.count + 1 })}>
        clicar
      </button>

      <br/>

      <button onClick={() => this.setState({ newCount: this.state.newCount + 1 })}>
      clicar outro
    </button>
    </React.Fragment>
    )
  }
}

export default AppClass;
