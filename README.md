## Navigation (Web app overview):

## Project overview:

``` bash
    .idea               # intellij setup (for easy introduction to the project)
    build               # temp folder used by groovy for building UI tests
    __test__            # jest unit testing
    components          # CO: components that can be reused in multiple pages
             icons              # CO: Shared icons for components
             partial            # CO: Component used for shared components
             layout             # CO: Layouts define general structures for pages
             shared             # CO: Component used for pages
    pages               # pages define the navigationable structure of the webapp
    public              # main configuration for application
    .dockerignore       # configuration file for the docker setup
    .eslintrc.json      # configuration file for the eslint setup
    .gitignore          # configuration file for the git setup
    .prettierrc         # configuration file for code formatting
    Dockerfile          # configuration file for building webapp with Docker containers
    next.config.js      # next project configuration file
    package.json        # nodejs project configuration file
    package-lock.json   # npm compiled project configuration file
    tailwind.config.js  # tailwind compiled style configuration file
    tsconfig.json       # general-purpose typescript configuration file
```

## Development Instruction
Follow this guide if you want to have Jenkins pipeline run locally

### Prerequisites
Build docker image using `docker-compose up -d`

### Add GitHub credentials
1. Go to the script folder `cd devops/scripts`
2. Create your own `.env.local` file, then copy value from `env.development`. In Unix, you can use `cp .env.development .env.local`
3. Fill your credentials
4. Run the scripts `./add-github-credentials.sh`. It may ask for permission, if so, run `chmod +x add-github-credentials.sh` before

### Multi-branch pipeline