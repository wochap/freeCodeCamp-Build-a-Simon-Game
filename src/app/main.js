import '../styles/main.scss'
import Counter from './Counter.marko'

const rootEl = document.getElementById('root')
let counter = Counter.renderSync().appendTo(rootEl).getComponent()

if (module.hot) {
  module.hot.accept('../styles/main.scss')
  module.hot.accept('./Counter.marko', () => {
    const prevState = counter.state // eslint-disable-line
    const nextCounter = Counter.renderSync(prevState).appendTo(rootEl).getComponent()

    counter.destroy()
    counter = nextCounter
  })
}
