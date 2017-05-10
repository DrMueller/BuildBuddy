import { IParameterlessConstructor } from '../../types/interfaces';
import { ContentType } from './enums';


export interface IHtttpService {
  get<T>(relativeUrl: string, ctor?: IParameterlessConstructor<T>): Promise<T>;

  patch<T>(relativeUrl: string, body: any, ctor?: IParameterlessConstructor<T>, contentType?: ContentType): Promise<T>;

  post<T>(relativeUrl: string, body: any, ctor?: IParameterlessConstructor<T>, contentType?: ContentType): Promise<T>;
}
