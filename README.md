# ACodeNinja's Docker Hub Images

## Electron Builder

|||
|---|---|
| Location | `electron-builder/Dockerfile` |
| Purpose | Provide a platform to build electron-builder executables for all platforms |
| Docker Hub | https://hub.docker.com/r/acodeninja/electron-builder/ |

Basic nodejs image with all system requirements to build [Electron Builder](https://www.electron.build/)
applications for windoze, linux, and macOS.

## DIWA

|||
|---|---|
| Location | `diwa/Dockerfile` |
| Purpose | Hackable image with specific purposeful security problems |
| Docker Hub | https://hub.docker.com/r/acodeninja/diwa/ |

Provides a hackable image with specific purposeful security problems allowing
those new to penetration testing to explore.

## Laravel Dusk

|||
|---|---|
| Location | `laravel-dusk/Dockerfile` |
| Purpose | Testing Laravel applications using dusk |
| Docker Hub | https://hub.docker.com/r/acodeninja/laravel-dusk/ |

This image cuts out some of the leg work needed to test an application using [Laravel Dusk](https://github.com/laravel/dusk).
I wrote it initially to save build time when testing with [BitBucket Pipelines](https://bitbucket.org/product/features/pipelines)
as Atlassian charges for the amount of time used by the build process.

## Laravel PHPUnit

|||
|---|---|
| Location | `laravel-phpunit/Dockerfile` |
| Purpose | Generic PHPUnit image with everything you would expect to be installed for testing a Laravel application |
| Docker Hub | https://hub.docker.com/r/acodeninja/laravel-phpunit/ |

Basic image with composer installed and everything you would expect for writing PHPUnit tests for Laravel applications.
