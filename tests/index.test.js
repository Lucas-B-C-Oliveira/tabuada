const indexController = require('../controllers/index')
const sinon = require('sinon')

describe('Index Controller', () => {
  it('renders home', () => {
    let res = {
      render: function () { }
    }
    let mock = sinon.mock(res)
    mock.expects('render').once().withArgs('home')
    indexController.home({}, res)
  })
})