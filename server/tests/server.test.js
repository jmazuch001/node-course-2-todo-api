const expect = require('expect');
const request = require('supertest');

const {app} = require('./../server');
const {Todo} = require('./../models/todo');

const todos = [{
  text: 'First test todo'
}, {
  text: 'Second test todo'
}, {
  text: 'Third test todo' 
}];

// For every test, you must also add one to this expect assertion: expect(todos.length).toBe(3);
// If there were three tests, and a quantity of (2) in the assertion, it would fail twice and pass once
// We want all tests to pass


// testing lifecycle method
// beforeEach((done) => {
//     Todo.remove({}).then(() => done());
//   });

beforeEach((done) => {
  Todo.remove({}).then(() => {
    Todo.insertMany(todos);
  }).then(() => done());
});

  describe('POST /todos', () => {
    it('should create a new todo', (done) => {
      var text = 'Test todo text';
  
      request(app)
        .post('/todos')
        .send({text})
        .expect(200)
        .expect((res) => {
          expect(res.body.text).toBe(text);
        })
        .end((err, res) => {
          if (err) {
            return done(err);
          }
  
          Todo.find({text}).then((todos) => {
            expect(todos.length).toBe(1); // any number other than 1 will cause a fail; text object 
            expect(todos[0].text).toBe(text);
            done();
          }).catch((e) => done(e));
        });
    });
  
    it('should not create todo with invalid body data.', (done) => {
      request(app)
        .post('/todos')
        .send({})
        .expect(400)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
  
          Todo.find().then((todos) => {
            expect(todos.length).toBe(3);
            done();
          }).catch((e) => done(e));
        });
    });
  });
  

  describe('GET /todos', () => {
    it('should get all todos', (done) => {
      request(app)
      .get('/todos')
      .expect(200)
      .expect((res) => {
        expect(res.body.todos.length).toBe(3);
      })
      .end(done);
    })
  })

  // Special Notes
  //  Anytime you add more 