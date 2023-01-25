import { Client } from '@elastic/elasticsearch';
import {Transport, TransportRequestParams, TransportRequestOptionsWithMeta, TransportRequestOptionsWithOutMeta} from '@elastic/transport';
import { config } from './config';

class TransportIncludingSubPath extends Transport { 
  async request( params: TransportRequestParams, options?: | 
    TransportRequestOptionsWithOutMeta | 
    TransportRequestOptionsWithMeta 
  ): Promise<any> { 
    params.path = config.elastic.prefix + params.path; return super.request(params, options); 
  } 
}

const elastic_client = new Client({
  node: config.elastic.host,
  Transport: TransportIncludingSubPath,
  auth: {
    username: config.elastic.user,
    password: config.elastic.password
  }
})

console.log('[x] Elasticsearch connected correctly');

export {
    elastic_client
}