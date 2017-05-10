import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { JsObjUtilities, JsObjFactory } from '../../utilities';
import { IParameterlessConstructor } from '../../types/interfaces';
import { Area } from '../../types/enums';
import { ContentType } from './enums';
import { IHtttpService } from '.';

export class Individual {
  public name: string;

}

@Injectable()
export abstract class HttpBaseService implements IHtttpService {
  public abstract get area(): Area;

  protected constructor(private http: Http, private baseUrl: string) { }

  public get<T>(relativeUrl: string, ctor: IParameterlessConstructor<T> = null): Promise<T> {
    const completeUrl = this.createCompleteUrl(relativeUrl);

    const requestoptions = new RequestOptions({
      withCredentials: true
    });

    // tslint:disable-next-line:no-console
    console.debug('Calling Get to ' + completeUrl);
    return this.processResponse(this.http.get(completeUrl, requestoptions), ctor);
  }

  public post<T>(
    relativeUrl: string,
    body: any,
    ctor: IParameterlessConstructor<T> = null,
    contentType: ContentType = ContentType.ApplicationJson): Promise<T> {
    const completeUrl = this.createCompleteUrl(relativeUrl);
    const headers = new Headers();

    headers.append('Content-Type', this.mapContentType(contentType));

    const requestoptions = new RequestOptions({
      headers: headers,
      withCredentials: true
    });

    // tslint:disable-next-line:no-console
    console.debug('Calling Post to ' + completeUrl);
    return this.processResponse(this.http.post(completeUrl, body, requestoptions), ctor);
  }

  public patch<T>(relativeUrl: string,
    body: any,
    ctor: IParameterlessConstructor<T> = null,
    contentType: ContentType = ContentType.ApplicationJson): Promise<T> {
    const completeUrl = this.createCompleteUrl(relativeUrl);
    const headers = new Headers();

    headers.append('Content-Type', this.mapContentType(contentType));

    const requestoptions = new RequestOptions({
      headers: headers,
      withCredentials: true
    });

    // tslint:disable-next-line:no-console
    console.debug('Calling Patch to ' + completeUrl);
    return this.processResponse(this.http.patch(completeUrl, body, requestoptions), ctor);
  }

  private processResponse<T>(response: Observable<Response>, ctor: IParameterlessConstructor<T> = null): Promise<T | null> {
    let mappedResult = response.map(this.extractData);

    if (!JsObjUtilities.isNullOrUndefined(ctor)) {
      mappedResult = mappedResult.map(f => {
        const newObj = JsObjFactory.create(f, ctor);
        return newObj;
      });
    }

    const result = mappedResult.toPromise();
    return result;
  }

  private mapContentType(contentType: ContentType): string {
    switch (contentType) {
      case ContentType.ApplicationJson:
        return 'application/json';
      default:
        throw new RangeError(contentType.toString() + ' is not recognized');
    }
  }

  private extractData(res: Response): any {
    let body;

    const tra = res.text();

    if (res.text()) {
      body = res.json();
    }

    if (!JsObjUtilities.isNullOrUndefined(body)) {
      return body;
    }

    return {};
  }

  private extractArray(res: Response): any {
    const body = res.json();
    return body.data || {};
  }

  private createCompleteUrl(relativeUrl: string) {
    const result = this.baseUrl + '/' + relativeUrl;
    return result;
  }
}
