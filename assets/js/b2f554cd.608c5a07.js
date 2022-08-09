"use strict";(self.webpackChunkpractica_docs=self.webpackChunkpractica_docs||[]).push([[477],{10:function(e){e.exports=JSON.parse('{"blogPosts":[{"id":"monorepo-backend","metadata":{"permalink":"/blog/monorepo-backend","editUrl":"https://github.com/practicajs/practica/tree/main/docs/blog/which-monorepo/index.md","source":"@site/blog/which-monorepo/index.md","title":"Which Monorepo is right for a Node.js BACKEND\xa0now?","description":"Making our decisions transparent and collaborative is at the heart of Practica. In this post, we\'d like to share our considerations in choosing our monorepo tooling","date":"2022-08-09T09:29:19.000Z","formattedDate":"August 9, 2022","tags":[{"label":"monorepo","permalink":"/blog/tags/monorepo"},{"label":"decisions","permalink":"/blog/tags/decisions"}],"readingTime":1.355,"truncated":false,"authors":[{"name":"Yoni Goldberg","title":"Practica.js core maintainer","url":"https://github.com/goldbergyoni","imageURL":"https://github.com/goldbergyoni.png","key":"goldbergyoni"},{"name":"Michael Salomon","title":"Practica.js core maintainer","url":"https://github.com/mikicho","imageURL":"https://avatars.githubusercontent.com/u/11459632?v=4","key":"michaelsalomon"}],"frontMatter":{"slug":"monorepo-backend","title":"Which Monorepo is right for a Node.js BACKEND\xa0now?","authors":["goldbergyoni","michaelsalomon"],"tags":["monorepo","decisions"]},"nextItem":{"title":"Popular Node.js patterns and tools to re-consider","permalink":"/blog/pattern-to-reconsider"}},"content":"Making our decisions transparent and collaborative is at the heart of Practica. In this post, we\'d like to share our considerations in choosing our monorepo tooling\\n\\n![Monorepos](/img/monorepo-theme-1.png)\\n\\n## What are we looking\xa0at\\n\\nThe Monorepo market is hot like fire. Weirdly, now when the demand for Monoreps is exploding, one of the leading libraries\u200a-\u200aLerna- has just retired. When looking closely, it might not be just a coincidence\u200a-\u200aWith so many disruptive and shiny features brought on by new vendors, Lerna failed to keep up with the pace and stay relevant. This bloom of new tooling gets many confused\u200a-\u200aWhat is the right choice for my next project? What should I look at when choosing a Monorepo tool? This post is all about curating this information overload, covering the new tooling, emphasizing what is important, and finally share some recommendations. If you are here for tools and features, you\'re in the right place, although you might find yourself on a soul-searching journey to what is your desired development workflow.\\n\\nThis post is concerned with backend-only and Node.js. It also scoped to typical business solutions. If you\'re Google/FB developer who is faced with 8,000 packages\u200a-\u200asorry, you need special gear. Consequently, monster Monorepo tooling like Bazel is left-out. We will cover here some of the most popular Monorepo tools including Turborepo, Nx, PNPM, Yarn/npm workspace, and Lerna (although it\'s not actually maintained anymore\u200a-\u200ait\'s a good baseline for comparison).\\n\\nLet\'s start? When human beings use the term Monorepo, they typically refer to one or more of the following 4 layers below. Each one of them can bring value to your project, each has different consequences, tooling, and features:"},{"id":"pattern-to-reconsider","metadata":{"permalink":"/blog/pattern-to-reconsider","editUrl":"https://github.com/practicajs/practica/tree/main/docs/blog/pattern-to-reconsider/index.md","source":"@site/blog/pattern-to-reconsider/index.md","title":"Popular Node.js patterns and tools to re-consider","description":"Node.js is maturing. Many patterns and frameworks were embraced - it\'s my believe that developer\'s productivity dramatically increased in the past years. One downside of maturity is habits - we now reuse existing techniques more often. How is this a problem?","date":"2022-08-02T10:00:00.000Z","formattedDate":"August 2, 2022","tags":[{"label":"node.js","permalink":"/blog/tags/node-js"},{"label":"express","permalink":"/blog/tags/express"},{"label":"nestjs","permalink":"/blog/tags/nestjs"},{"label":"fastify","permalink":"/blog/tags/fastify"},{"label":"passport","permalink":"/blog/tags/passport"},{"label":"dotenv","permalink":"/blog/tags/dotenv"}],"readingTime":18.225,"truncated":false,"authors":[{"name":"Yoni Goldberg","title":"Practica.js core maintainer","url":"https://github.com/goldbergyoni","imageURL":"https://github.com/goldbergyoni.png","key":"goldbergyoni"}],"frontMatter":{"slug":"pattern-to-reconsider","date":"2022-08-02T10:00","hide_table_of_contents":true,"title":"Popular Node.js patterns and tools to re-consider","authors":["goldbergyoni"],"tags":["node.js","express","nestjs","fastify","passport","dotenv"]},"prevItem":{"title":"Which Monorepo is right for a Node.js BACKEND\xa0now?","permalink":"/blog/monorepo-backend"}},"content":"Node.js is maturing. Many patterns and frameworks were embraced - it\'s my believe that developer\'s productivity dramatically increased in the past years. One downside of maturity is habits - we now reuse existing techniques more often. How is this a problem?\\n\\nIn his novel book, \'Atomic Habits\', the author James Clear states that \\"Mastery is created by habits. However, sometimes when we\u2019re on auto-pilot performing habits, we tend to slip up... Just being we are gaining experience through performing the habits does not mean that we are improving. We actually go backwards on the improvement scale with most habits that turn into auto-pilot\\". In other words, practice makes perfect, bad practices makes things worst\\n\\nWe copy-paste mentally and physically things that we are used to, but these things are not necessarily right anymore. Like animals who shed their shells or skin to adapt to a new reality,  so Node.js community should constantly gauge its existing patterns, discuss and change\\n\\nLuckily, unlike other languages who are more committed to specific design paradigms (Java, Ruby) - Node is a house of many ideas. In this community I feel safe to question some of our good-old tooling and patterns. The list below contains just my personal believe which is brought with reasoning and examples. I\'m not sure that I\'m right, I don\'t need to. If we want to make Node.js live longer - we just need to encourage critics, focus our loyalty on innovation and keep the discussion going\\n\\n![Animals and frameworks shed their skin](./crab.webp)\\n\\n*The True Crab\'s exoskeleton is hard and inflexible, he must shed his restrictive exoskeleton to grow and reveal the new roomier shell*\\n\\n## TOC - Patterns to reconsider\\n\\n1. Dotenv\\n2. Calling a service from a controller\\n3. Nest.js dependency injection for all classes\\n4. Passport.js\\n5. Supertest\\n6. Fastify utility decoration\\n7. Logging from a catch clause\\n8. package.lock.json on developer\'s machine\\n9. Morgan logger\\n10. NODE_ENV\\n    \\n## 1. Dotenv as your configuration source\\n\\n**\ud83d\udc81\u200d\u2642\ufe0f What is it about:** A super popular technique in which the app configurable values (e.g., DB user name) are stored in a simple text file. Then, when the app loads, the dotenv library sets all the text file values as environment variables so the code can read those\\n\\n\\n```javascript\\n// .env file\\nUSER_SERVICE_URL=https://users.myorg.com\\n\\n//start.js\\nrequire(\'dotenv\').config();\\n\\n//blog-post-service.js\\nrepository.savePost(post);\\n//update the user number of posts, read the users service URL from an environment variable\\nawait axios.put(`${process.env.USER_SERVICE_URL}/api/user/${post.userId}/incrementPosts`)\\n\\n```\\n\\n**\ud83d\udcca How popular:** 21,806,137 downloads/week!\\n\\n**\ud83e\udd14 Why it might be wrong:** Dotenv is so easy and intuitive to start with so one easily overlook fundamental features: It\'s hard to infer the configuration schema and realize the reason and typing of each key. Consequently, there is no built-in way to fail fast when a mandatory key is missing (a flow might fail after already started and doing side-effects). In the example above, the blog post will be saved to DB and only then too late the code will realize that a mandatory key is missing leaving the app hanging in an invalid state. On top of this, in the precense of many keys, it\'s not possible to organize them hierarchically. If not enough, it encourages developers to commit this .env file which might contain production values - this happens because there is no clear way to define development defaults (teams usually work around this by committing .env.example file and then asking whomever pulls code to rename this file manually. If they remember of course)\\n\\n\\n**\u2600\ufe0f Better alternative:** Some configuration libraries provide out of the box solution to all of these needs, mostly a clear schema and the possibility to validate early and fail if needed. See comparison of options here. One of the better alternatives is \'convict\', here is the same example, hopefully better:\\n\\n```javascript\\n// config.js\\nexport default {\\n  userService: {\\n    url: {\\n        // Hierarchical, documented and strongly typed \ud83d\udc47\\n        doc: \'The URL of the user management service including a trailing slash\',\\n        format: \'url\',\\n        default: \'http://localhost:4001\',\\n        nullable: false,\\n        env: \'USER_SERVICE_URL\',\\n        }\\n  },\\n  //more keys here\\n}\\n\\n//start.js\\nimport convict from \'convict\';\\nimport configSchema from \'config\';\\nconvict(configSchema);\\n// Fail fast!\\nconvictConfigurationProvider.validate();\\n\\n//blog-post.js\\nrepository.savePost(post);\\n// Will never arrive here if the URL is not set\\nawait axios.put(`${convict.get(userService.url)}/api/user/${post.userId}/incrementPosts`)\\n```\\n\\n## 2. Calling a \'fat\' service from the API controller\\n\\n**\ud83d\udc81\u200d\u2642\ufe0f What is it about:** Consider a reader of our code who wishes to understand the entire *high-level* flow or delve into a very *specific* part. She first lands on the API controller, where requests start. This controller layer, unlike what its name implies, is just an adapter and kept really thin and simple. Great thus far. Then the controller calls a big \'service\' with thousands lines of code that represent the entire logic\\n\\n```javascript\\n// user-controller\\nrouter.post(\'/\', async (req, res, next) => {\\n    await userService.add(req.body);\\n    // Might have here try-catch or error response logic\\n}\\n\\n// user-service\\nexports function add(newUser){\\n    // Want to understand quickly? Need to understand the entire user service, 1500 loc\\n    // It uses technical language and reuse narratives of other flows\\n    this.copyMoreFieldsToUser(newUser)\\n    const doesExist = this.updateIfAlreadyExists(newUser)\\n    if(!doesExist){\\n        addToCache(newUser);\\n    }\\n    // 20 more lines that demand navigating to other functions in order to get the intent\\n}\\n\\n    \\n```\\n\\n**\ud83d\udcca How popular:** It\'s hard to pull solid numbers here, I could confidently say that in *most* of the app that I see, this is the case\\n\\n**\ud83e\udd14 Why it might be wrong:** We\'re here to tame complexities. One of the useful techniques, is deferring a complexity to the later stage possible. In this case, the reader\'s of the code (hopefully) easily skim through the tests and the controller, and then as she lands on the service - she gets all the complexity of the domain and the code although she is not interested in all the details. This is unnecessary complexity\\n\\n**\u2600\ufe0f Better alternative:** Controller should call a special type of service, a **use-case**, which is responsible to *summarize* the flow in a business and simple language. Each flow/feature is described using a use-case, each contains 4-10 lines of code, that tell the story without technical details. It mostly orchestrates other small services, clients, and repositories who hold all the implementation details. With use cases, the reader can grasp the high-level flow easily, she can now **choose** where she would like to focus. She is now exposed only to necessary complexity. This technique also encourages partitioning the code to the smaller object that the use-case orchestrate. Bonus: By looking at coverage reports, one can tell which features are covered, not just files/functions\\n\\n```javascript\\n// add-order-use-case.js\\nexport async function addOrder(newOrder: addOrderDTO) {\\n  orderValidation.assertOrderIsValid(newOrder);\\n  const userWhoOrdered = await userServiceClient.getUserWhoOrdered(newOrder.userId);\\n  paymentTermsService.assertPaymentTerms(\\n    newOrder.paymentTermsInDays,\\n    userWhoOrdered.terms\\n  );\\n\\n  const response = await orderRepository.addOrder(newOrder);\\n\\n  return response;\\n}\\n\\n```\\n\\nIdeas: Encourage breaking down to small services, transactions, controller is a bad name, clean architecture, code coverage\\n\\n## 3. Nest.js: Wire *everything* with dependency injection\\n\\n\\n**\ud83d\udc81\u200d\u2642\ufe0f What is it about:** If you\'re doing Nest.js, besides having a powerful framework in your hands, you probably use DI for *everything* and make every class injectable. Say you have a weather-service that depends upon humidity-service, and **there is no requirement to swap** the humidity-service and replace it with some alternative services. You still inject humidity-service into the weather-service. It becomes part of your development style, \\"why not\\" you think - I may need to stub it during testing or replace it in the future\\n\\n \\n```typescript\\n// humidity-service.ts - not customer facing\\n@Injectable()\\nexport class GoogleHumidityService {\\n\\n  async getHumidity(when: Datetime): Promise<number> {\\n    // Fetches from some specific cloud service\\n  }\\n}\\n\\n// weather-service.ts - customer facing\\nimport { GoogleHumidityService } from \'./humidity-service.ts\';\\n\\nexport type weatherInfo{\\n    temperature: number, \\n    humidity: number\\n}\\n\\nexport class WeatherService {\\n  constructor(private humidityService: GoogleHumidityService) {}\\n\\n  async GetWeather(when: Datetime): Promise<weatherInfo> {\\n    // Fetch temperature from somewhere and then humidity from GoogleHumidityService\\n  }\\n}\\n\\n// app.module.ts\\n@Module({\\n  providers: [GoogleHumidityService, WeatherService],\\n})\\nexport class AppModule {}\\n```\\n\\n**\ud83d\udcca How popular:** No numbers here but I could confidently say that in *all* of the Nest.js app that I\'ve seen, this is the case\\n\\n**\ud83e\udd14 Why it might be wrong:** Dependency injection is not a priceless coding style rather a pattern that you should pull in the right moment, like an other pattern. Why? because any pattern has its price. What price you ask? First, encapsulation is violated, clients of weather-service are now aware that other providers it uses *internally*, some may get tempted to override it also its not under their responsibility. Second, it\'s another layer of complexity to learn, maintain and another way to shoot yourself in the legs. StackOverflow ows some of its revenues to Nest.js DI, plenty of discussions try to solve this puzzle (e.g. did you know that in case of circular dependency the order of imports matter?). Third, there is the performance thing - Nest.js for example struggled to provide decent start time for serverless environments and had to introduce [lazy loaded modules](https://docs.nestjs.com/fundamentals/lazy-loading-modules). Don\'t get me wrong, **in some cases**, there is a clear need to decouple a dependency from its caller, or to allow clients to inject custom implementations (e.g., the strategy pattern) - **In such case**, when there is a value, you may consider whether the *value of DI worth its price*. If you don\'t have this case, why pay for nothing?\\n\\n**\u2600\ufe0f Better alternative:** \'Leanify\' your engineering approach - avoid using any tool unless serves real-world need immediately. Start simple, a dependant class just import its dependency and use it. Facing a situation when there is a need to factor dynamic objects? There are handful of simple patterns, simpler than DI, that you should consider like \'if/else\', factory function and more. Singleton are requested? consider techniques with lower costs like the module system with factory function. Need to stub/mock for testing? Monkey patching might be better than DI: better clutter your test code a bit than clutter your production code. Have a strong need to hide from an object where its dependencies are coming from? You sure? Use DI!\\n\\n```typescript\\n// humidity-service.ts - not customer facing\\n  export async function getHumidity(when: Datetime): Promise<number> {\\n    // Fetches from some specific cloud service\\n  }\\n\\n// weather-service.ts - customer facing\\nimport { getHumidity } from \'./humidity-service.ts\';\\n\\n    // \u2705 No wiring is happening externally, all is flat and explicit. Simple\\n  export async function getWeather(when: Datetime): Promise<number> {\\n    // Fetch temperature from somewhere and then humidity from GoogleHumidityService\\n    // Nobody needs to know about it, its an implementation details\\n    await getHumidity(when);\\n     \\n  }\\n```\\n\\nIdeas: The complexity tree, good articles, not really di, nest example app, YAGNI\\n\\n## 4. Passport.js for token authentication\\n\\n\\n**\ud83d\udc81\u200d\u2642\ufe0f What is it about:** Commonly, you\'re in a need to issue or/and authenticate JWT tokens. You might also need to allow log-in from *one* single social network like Google/Facebook. When faced with these kind of needs, Node.js developers rush to the glorious library Passport.js like butterflies attracted to light\\n\\n**\ud83d\udcca How popular:** 1,389,720 weekly downloads\\n\\n**\ud83e\udd14 Why it might be wrong:** If you\'re simply tasked with guarding your routes with JWT token - you\'re just few lines of code shy from ticking the goal. Instead of messing up with a new framework, instead of introducing levels of indirections (you call passport, then it calls you), instead of spending time learning new abstractions - just use one of the simple and reputable JWT parsing libraries like [jsonwebtoken](https://github.com/auth0/node-jsonwebtoken) or [fast-jwt](https://github.com/nearform/fast-jwt). Have concerns with the security hardening? Good point, will you get better hardening with direct understanding of your configuration and flow or by hiding things behind a framework? I\'m not sure. Also, Passport might take care for hardening the flow, but what about secrets/token managements and DB protection - various cloud services or OSS projects, can tick all of those boxes. Consider also that Passport doesn\'t aim to handle authorization or user management. It seems to me like many who opt for Passport.js are not fully aware which needs are satisfied and which are left open. All of that said, Passport definitely shines when looking for a quick way to support *many* social login providers\\n\\n\\n**\u2600\ufe0f Better alternative:** If all you need is a token authentication? These few lines of code below might be all you need, you might also see [practica.js JWT lib example](https://github.com/practicajs/practica/tree/main/src/code-templates/libraries/jwt-token-verifier). You probably need more than this - support async JWT flow with JWKS, securely manage and rotate the secrets and more. In this case, OSS solution like [keycloak](https://github.com/keycloak/keycloak) or commercial options like Auth0[https://github.com/auth0] are alternatives to consider \\n\\n```javascript\\n// jwt-middleware.js, a simplified version - Refer to Practica.js to see some more corner cases\\nconst middleware = (req, res, next) => {\\n    if(!req.headers.authorization){\\n        res.sendStatus(401)\\n    }\\n\\n    jwt.verify(req.headers.authorization, options.secret, (err: any, jwtContent: any) => {\\n      if (err) {\\n        return res.sendStatus(401);\\n      }\\n\\n      req.user = jwtContent.data;\\n\\n      next();\\n    });\\n```\\n## 5. Supertest for integration/API testing\\n\\n**\ud83d\udc81\u200d\u2642\ufe0f What is it about:** When testing against an API (i.e., component or integration tests), the library [supertest](https://www.npmjs.com/package/supertest) provides a sweet syntax that can both detect the web server address, make HTTP call and also assert on the response. Three in one. \\n\\n```javascript\\ntest(\'When adding invalid user, then the response is 400\', (done)=> {\\n    const request = require(\'supertest\')\\n    const app = express();\\n    // Arrange\\n    const userToAdd = {\\n      name: undefined\\n    }\\n\\n    // Act\\n    request(app)\\n      .post(\'/user\')\\n      .send(userToAdd)\\n      .expect(\'Content-Type\', /json/)\\n      .expect(400, done);\\n\\n    // Assert\\n    // We already asserted above \u261d\ud83c\udffb as part of the request\\n  });\\n```\\n\\n**\ud83d\udcca How popular:** 2,717,744 weekly downloads\\n\\n**\ud83e\udd14 Why it might be wrong:** You already have your assertion library (Jest? Chai?), it has great error highlighting and comparison - you trust it. Why code some tests using another assertion syntax? Not to mention, supertest\'s assertion errors are not descriptive as Jest and Chai. It\'s also cumbersome to mix HTTP client + assertion library instead of choosing the best for each mission. Speaking of the best, there are more standard, popular, and better maintained HTTP clients (fetch, axios and other friends). Need another reason? supertest might encourage coupling the tests to express as it offers a constructor that gets express object and infer the address by itself. This couples the test to the implementation and won\'t work in case where you wish to run the same tests against a remote process (the API doesn\'t live with the tests)\\n\\n\\n**\u2600\ufe0f Better alternative:** A popular and standard HTTP client library like Node.js Fetch or Axios\\n\\n```javascript\\ntest(\'When adding invalid user, then the response is 400 and includes a reason\', (done)=> {\\n    const app = express();\\n    // Arrange\\n    const userToAdd = {\\n      name: undefined\\n    }\\n\\n    // Act\\n    const receivedResponse = axios.post(`http://localhost:${apiPort}/user`, userToAdd)\\n\\n    // Assert\\n    // \u2705 Assertion happens in a dedicated stage and a dedicated library\\n    expect(receivedResponse).toMatchObject({\\n      status: 400,\\n      data:{\\n        reason: \'no-name\'\\n      }\\n    })\\n  });\\n```\\n\\n## 6. Fastify decorate for non request/web utilities\\n\\n**\ud83d\udc81\u200d\u2642\ufe0f What is it about:** Fastify introduces great patterns, I mostly like how it preserves the simplicity of express while bringing more batteries. One thing that got me wondering is the \'decorate\' feature which allows placing common utilities/services inside a widely accessible container object. I\'m referring here specifically to the case where a cross cutting concern utility/service is being used:\\n\\n```javascript\\n// An example of a utility that is cross-cutting-concern. Could be logger or anything else\\nfastify.decorate(\'metricsService\', function (name) {\\n  fireMetric: () => {\\n    // My code that sends metrics to the monitoring system\\n  }\\n})\\n\\nfastify.get(\'/api/orders\', async function (request, reply) {\\n  this.metricsService.fireMetric({name: \'new-request\'})\\n  // Handle the request\\n})\\n\\n// my-business-logic.js\\nexports function calculateSomething(){\\n  // How to fire a metric?\\n}\\n```\\n\\nIt should be noted that \'decoration\' is also used to place values (e.g., user) inside a request - this is a slightly different case and sensible\\n\\n**\ud83d\udcca How popular:** Fastify has 696,122 weekly download and growing rapidly. The decorator concept is part of the framework\'s core\\n\\n**\ud83e\udd14 Why it might be wrong:** Some services and utilities serve cross-cutting-concern needs and should be accessible from other layers like domain and DAL. The fastify object might not accessible to these layers, and you also probably don\'t want to couple your web framework with you business logic. Consider that some of your business logic and repositories might get invoked from non-REST clients like CRON, MQ and similar - In these cases Fastify won\'t get involved at all\\n\\n**\u2600\ufe0f Better alternative:** A good old Node.js module is a standard way to expose and consume functionality. Need a singleton? Use the module system caching. Need to instantiate a service with in correlation with some Fastify life-cycle hook (e.g., DB connection on start)? Call it from that Fastify hook\\n\\n```javascript\\n// \u2705 A simple usage of good old Node.js modules\\n// metrics-service.js\\n\\nexports async function fireMetric(name){\\n  // My code that sends metrics to the monitoring system\\n}\\n\\nimport {fireMetric} from \'./metrics-service.js\'\\n\\nfastify.get(\'/api/orders\', async function (request, reply) {\\n  metricsService.fireMetric({name: \'new-request\'})\\n})\\n\\n// my-business-logic.js\\nexports function calculateSomething(){\\n  metricsService.fireMetric({name: \'new-request\'})\\n}\\n```\\n\\n## 7. Logging from a catch clause\\n\\n**\ud83d\udc81\u200d\u2642\ufe0f What is it about:** You catch an error somewhere deep in the code (not on the route level), then call logger.error to make this error observable. Feels simple and necessary\\n\\n```javascript\\ntry{\\n    axios.post(\'https://thatService.io/api/users);\\n}\\ncatch(error){\\n    logger.error(error, this, {operation: addNewOrder});\\n}\\n```\\n\\n**\ud83d\udcca How popular:** Hard to put my hands on numbers but it\'s quite popular, right?\\n\\n**\ud83e\udd14 Why it might be wrong:** First, errors should get handled/logged in a central location. Error handling is a critical path, without a centralized and unified behaviour, it\'s easy for different catch clauses along the code to behave differently. For example, a request might arise to tag all errors with certain metadata, or on top of logging to also fire a monitoring metric - applying this in ~100 different locations is not a walk in the park. Second, catch clauses should be minimized to very specific scenarios. By default, the natural flow of an error is bubbling down to the route/entry-point - from there is will get forwarded to the error handler. Catch clauses should serve two very specific needs: When one wishes to change the flow based on the error or enrich the error with more information (which is not the case in this example)\\n\\n**\u2600\ufe0f Better alternative:** Let the error bubble down the layer, unless the error changes the flow or there is value in enriching the error with more context. When deciding to use catch, delegate the handling/logging to your centralized handler:\\n\\n```javascript\\ntry{\\n    axios.post(\'https://thatService.io/api/users);\\n}\\ncatch(error){\\n    // \u2705 A central location that handles error\\n    errorHandler.handle(error, this, {operation: addNewOrder});\\n}\\n```\\n\\n## 8. Package.lock OR Reading environment variables in all the code layers\\n\\nThe Monorepo market is hot like fire. Weirdly, now when the demand for Monoreps is exploding, one of the leading libraries\u200a-\u200aLerna- has just retired. When looking closely, it might not be just a coincidence\u200a-\u200aWith so many disruptive and shiny features brought on by new vendors, Lerna \\n\\n## 9. Use Morgan logger for express web requests\\n\\n**\ud83d\udc81\u200d\u2642\ufe0f What is it about:** In many express apps, you are likely to find a pattern that is being copy-pasted for ages - Using Morgan logger to log requests information:\\n\\n```javascript\\nconst express = require(\'express\')\\nconst morgan = require(\'morgan\')\\n\\nconst app = express()\\n\\napp.use(morgan(\'combined\'))\\n```\\n\\n**\ud83d\udcca How popular:** 2,901,574 downloads/week\\n\\n**\ud83e\udd14 Why it might be wrong:** Wait a second, you already have your main logger, right? Is it Pino? Winston? something else? great. Why deal with and configure yet another logger? I do appreciate the request domain-specific language (DSL) of Morgan, sweet syntax, does it justify having two loggers?\\n\\n**\u2600\ufe0f Better alternative:** Put your chosen logger in a middleware and log the desired request/response properties:\\n\\n```javascript\\n// \u2705 Use your preferred logger for all the tasks\\nconst logger = require(\\"pino\\")();\\napp.use((req, res, next) => {\\n  res.on(\\"finish\\", () => {\\n    logger.info(`${req.url} ${res.statusCode}`);// Add other properties here\\n  });\\n  next();\\n});\\n\\n```\\n\\n## 10. Having conditional code based on NODE_ENV value\\n\\n**\ud83d\udc81\u200d\u2642\ufe0f What is it about:** To differentiate between a configuration of development vs production, it\'s common to set the environment variable NODE_ENV with \\"production|test\\". Doing so allows the various tooling to act differently. For example, some templating engines will cache compiled templates only in production. Beyond tooling, custom applications use this to specify behaviours that are unique to the development or production environment:\\n\\n```javascript\\nif(process.env.NODE_ENV === \\"production\\"){\\n    // This is unlikely to be tested since test runner usually set NODE_ENV=test\\n    setLogger({stdout: true, prettyPrint: false});\\n    // If this code branch above exists, why not add more production-only configurations:\\n    collectMetrics();\\n}\\nelse{\\n    setLogger({splunk: true, prettyPrint: true});\\n}\\n```\\n\\n**\ud83d\udcca How popular:** 5,034,323 code results in GitHub when searching for \\"NODE_ENV\\". It doesn\'t seem like a rare pattern\\n\\n**\ud83e\udd14 Why it might be wrong:** Anytime your code checks whether it\'s production or not, this branch won\'t get hit by default in some test runner (e.g., Jest set NODE_ENV=test). In *any* test runner, the developer must remember to test for each possible value of this environment  variable. In the example above, \'collectMetrics()\' will be tested for the first time in production. Additionally, putting this conditions opens the door to add more differences between production and the developer machine. Theoretically, one can set NODE_ENV = \\"production\\" in testing and cover all the branches, but then if you can test the production version, what\'s the point in separating?\\n\\n**\u2600\ufe0f Better alternative:** To avoid having untested code **that you wrote**, the same code must get executed in all environments - no if(production)/else(development) conditions. Inevitably, developers machine are likely to have different surrounding infrastructure like different logging system. We feel comfortable with it because these infrastructural libraries are battle tested and anyway not ours. Practically, we may put different values in the configuration but not in the code. For example, a typical logger emits JSON in production but in development machine it emits \'pretty-print\' colorful lines. To meet this, we set ENV VAR that tells whether what logging style we aim for:\\n\\n\\n```javascript\\n//package.json\\n\\"scripts\\": {\\n    \\"start\\": \\"LOG_PRETTY_PRINT=false index.js\\",\\n    \\"test\\": \\"LOG_PRETTY_PRINT=true jest\\"\\n}\\n\\n//index.js\\n//\u2705 No condition, same code for all the environments. The variations are defined externally in config or deployment files \\nsetLogger({prettyPrint: process.env.LOG_PRETTY_PRINT})\\n```"}]}')}}]);