# Current AI Tech Stack

This diagram illustrates the current AI technology stack, focusing on how user queries are processed through an agentic service application and interact with various business layers.

![Current AI Tech Stack](../static/img/current-tech.png)

## Technical Architecture

### Query Flow

- User submits query to Agentic Service App
- App processes and routes to appropriate providers
- Response aggregated and returned to user

### Service Layers

**Model Layer**
- AI inference providers (OpenAI, xAI, Google, Anthropic)
- Model selection and orchestration
- Inference optimization

**Cloud Layer**  
- Compute infrastructure (GCP, AWS)
- Resource scaling
- Data storage/processing

**Service Layer**
- External API integrations
- Data providers (Gmail, LinkedIn, Bloomberg)
- Authentication/access management

The architecture uses a middleware pattern to abstract provider interactions and handle request routing, with dependencies on external AI, cloud, and data services.