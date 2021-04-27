import { Module, DynamicModule } from "@nestjs/common";
import { LoggerModuleAsyncParams, Params } from "./params";
import { LoggerCoreModule } from "./LoggerCoreModule";

@Global()
@Module({})
export class LoggerModule {
  static forRoot(params?: Params | undefined): DynamicModule {
    return {
      module: LoggerModule,
      imports: [LoggerCoreModule.forRoot(params)]
    };
  }

  static forRootAsync(params: LoggerModuleAsyncParams): DynamicModule {
    return {
      module: LoggerModule,
      imports: [LoggerCoreModule.forRootAsync(params)]
    };
  }
}
