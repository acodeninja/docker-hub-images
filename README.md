# ACodeNinja's Docker Hub Images

## Laravel Dusk 

|||
|---|---|
| Location | `laravel-dusk/Dockerfile` |
| Purpose | Testing Laravel applications using dusk |
| Docker Hub | https://hub.docker.com/r/acodeninja/laravel-dusk/ |

This image cuts out some of the leg work needed to test an application
using [Laravel Dusk](https://github.com/laravel/dusk). I wrote it initially
to save build time when testing with [BitBucket Pipelines](https://bitbucket.org/product/features/pipelines)
as Atlassian charges for the amount of time used by the build process.
