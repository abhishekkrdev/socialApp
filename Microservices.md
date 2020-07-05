## Application Architecture Patterns

1. Monolithic Architecture
2. Microservice Architecture

We will be reading about

1. Introduction to Application Development
2. Monolithic Architecture
3. Problems With Monolithic
4. Microservices as an Alternative --> To achieve loose coupling and downtime be nullified
5. Pros and Cons of Microservice Architecture
6. Scaling Your Application
7. Future Of Serverless/CloudComputing
8. Infrastructure As A Code

In Monololith Application Development we divide app into multiple modules.It can have different modules such as UI, Business Logic, Data Access Layer.
Disadvantages are if new developer and want to add new codes. It will have to see code dependency.

Monolithic application has single code base with multiple modules. Modules are divided as either for bussiness features or technical features.It has single
build system which build entire application and/or dependency.It also has single executable or deployable binary.

Sometimes it is also called mulit-tier architecture because monolithic applications are divided in three or more layers or tire i.e presentation, business,
database application.

#### Limitations

Difficulties with monolithic application, when it grow

1. Large monolithic code base makes complicated to understand,especially for new developer.
2. Scaling becomes challenging.
3. Continuous integration/deployment become complex and time consuming.You may require dedicated team for build and deploy.
4. Overloaded IDE.Large code base makes IDE slow, build time increases.
5. Extremely difficult to change technology or language framework because everything is tightly coupled and depend on each other.

Entire paradigm shift from browser / desktop to mobile /smart devices. Enterprise need to serve data to different devices and form factors
(smart phone,tablet,handheld etc.)

#### Microservices Architecture

Microservices architecture is an approach of building large enterprise apps with multiple small unit called service, each service develop,
deploy and test individually.

Each service intercommunicate with a common communication protocol like REST web service with JSON.Each service may have own database or
storage system or they can share common database or storage system.Microservice is all about distribute or break applications in small
chunks.

Each service run individually either in single machine or different machine but they execute its own separate process.

#### Benefits of Microservices

Privilege with Microservice architecture, when it grow

1. Each microservice is small and focused on a specific feature/business requirement.
2. Microservice can be developed independently by small team of developers(normally 2 to 5 developers).
3. Microservice is loosely coupled,means service are independent,in terms of development and deployment both.
4. Microservices allows easy and flexible way to integrate automatic deployment with continuous integration tools (for example Jenkins,Hudson).
   The productivity of a new team member will be quick enough.
5. Microservice is easy to scale based on demand.In a nutshell, monlithic vs microservice is like elephant vs ant approach.When you want
   to build a giant system like elephant or army of ant,small,fast and effective.

#### Deploying your Microservices

Microservices can be deployed in a variety of ways. They can be part of a serverless architecture,hosted in containers, developed using PaaS, or
theoritcally used to build a locally hosted application.

However, the advantages of building an application out of microservices are perhaps most apparent when the application is hosted in the cloud,either
using containers or in a serverless architecture.

#### Event Driven Architecture

Event Service Bus -> Tools like Kafka , RabbitMq

Fire and Forget which is different than request and reply.

#### Decomposition Patterns

1. Decompose by Business Capability
2. Decompose by subdomain
3. Decompose by Transactions
4. Strangler Pattern
5. Bulkhead Pattern

#### Integration Patterns

1. API Gateway Pattern
2. Aggregator Pattern
3. Proxy Pattern
4. Gateway Routing Pattern
5. Chained Microservice Pattern
