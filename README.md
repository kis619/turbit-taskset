# Wind Power

My first solo full-stack project. A website which gives you data from wind turbines for specific dates.

## Table of Contents

- [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Installation](#installation)
- [Project Structure](#project-structure)
- [Usage](#usage)
- [Notes](#notes)
- [License](#license)
- [Contact](#contact)

## Getting Started

Follow these instructions to get the project up and running on your local machine.

### Prerequisites

- Docker
- Docker Compose

### Installation

1. Clone the repository:
    `git clone https://github.com/kis619/turbit-taskset`
2. Navigate to the project directory
    `cd turbit-taskset`
3. Start the services
    `docker-compose up`


## Project Structure

Below is the basic project structure:

``` bash
.
├── backend               # Contains backend service code built with Python FastAPI
├── docker-compose.yml    # Defines services, networks and volumes
├── frontend              # Contains frontend service code built with JavaScript and React
├── MongoDB               # MongoDB data volume - gets created on build
├── notebooks             # Contains notes on the project process
└── README.md             # This beautiful file
```
## Usage

- The **frontend** service is accessible at `localhost:3000`
- The **backend** service is accessible at `localhost:8001`
- The **database** is accessible at `localhost:27019`

## Notes

The `notebooks` directory contains notes detailing the thought process and decision-making steps throughout the project.

## License

Distributed under the MIT License. See `LICENSE` for more information.

