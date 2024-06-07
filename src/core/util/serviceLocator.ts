interface ServiceMap {
    [key: string]: any;
  }
  
class ServiceLocator {
  private services: ServiceMap = {};

  public register<T>(name: string, service: T): void {
    if (!this.services[name]) {
      this.services[name] = service;
    }
  }

  public get<T>(name: string): T {
    return this.services[name] as T;
  }
}

export const serviceLocator = new ServiceLocator();