const handlers = {}

function addHandler(from, handlerString) {
  // eslint-disable-next-line
  handlers[from] = eval(`(...args) => (${handlerString})(...args)`)

  // eslint-disable-next-line
  console.log(`Handler added from: ${from}`)
}

module.exports = { handlers, addHandler }
