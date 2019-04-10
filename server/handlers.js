let handlers = {}

function addHandler(from, handlerString) {
  handlers[from] = eval(`(...args) => (${handlerString})(...args)`)

  console.log(`Handler added from: ${from}`)
}

module.exports = { handlers, addHandler }
