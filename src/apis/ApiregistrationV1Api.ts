/* tslint:disable */
/* eslint-disable */
/**
 * Kubernetes
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: release-1.19
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import {
  RequestOpts,
  HTTPHeaders,
  HTTPQuery,
  ApiResponse,
  StringApiResponse,
  JSONApiResponse,
  ItemType,
  KubeEvent,
  request,
  requestStream
} from '../runtime'
import V1APIResourceList from '../models/V1APIResourceList'
import V1APIService from '../models/V1APIService'
import V1APIServiceList from '../models/V1APIServiceList'
import V1DeleteOptions from '../models/V1DeleteOptions'
import V1Status from '../models/V1Status'

interface CreateAPIServiceRequest {
  body: V1APIService

  pretty?: string

  dryRun?: string

  fieldManager?: string
}

interface DeleteAPIServiceRequest {
  name: string

  pretty?: string

  dryRun?: string

  gracePeriodSeconds?: number

  orphanDependents?: boolean

  propagationPolicy?: string

  body?: V1DeleteOptions
}

interface DeleteCollectionAPIServiceRequest {
  pretty?: string

  _continue?: string

  dryRun?: string

  fieldSelector?: string

  gracePeriodSeconds?: number

  labelSelector?: string

  limit?: number

  orphanDependents?: boolean

  propagationPolicy?: string

  resourceVersion?: string

  resourceVersionMatch?: string

  timeoutSeconds?: number

  body?: V1DeleteOptions
}

interface ListAPIServiceRequest {
  pretty?: string

  allowWatchBookmarks?: boolean

  _continue?: string

  fieldSelector?: string

  labelSelector?: string

  limit?: number

  resourceVersion?: string

  resourceVersionMatch?: string

  timeoutSeconds?: number
}

interface PatchAPIServiceRequest {
  name: string

  body: object

  pretty?: string

  dryRun?: string

  fieldManager?: string

  force?: boolean
}

interface PatchAPIServiceStatusRequest {
  name: string

  body: object

  pretty?: string

  dryRun?: string

  fieldManager?: string

  force?: boolean
}

interface ReadAPIServiceRequest {
  name: string

  pretty?: string

  exact?: boolean

  _export?: boolean
}

interface ReadAPIServiceStatusRequest {
  name: string

  pretty?: string
}

interface ReplaceAPIServiceRequest {
  name: string

  body: V1APIService

  pretty?: string

  dryRun?: string

  fieldManager?: string
}

interface ReplaceAPIServiceStatusRequest {
  name: string

  body: V1APIService

  pretty?: string

  dryRun?: string

  fieldManager?: string
}

/**
 * create an APIService
 */
export async function createAPIServiceRaw(
  requestParameters: CreateAPIServiceRequest,
  ...requestOptsArray: Partial<RequestOpts>[]
): Promise<ApiResponse<V1APIService>> {
  if (requestParameters.body === null || requestParameters.body === undefined) {
    throw new Error(
      'Required parameter requestParameters.body was null or undefined when calling createAPIService.'
    )
  }
  const queryParameters: HTTPQuery = {}
  if (requestParameters.pretty !== undefined) {
    queryParameters['pretty'] = requestParameters.pretty
  }
  if (requestParameters.dryRun !== undefined) {
    queryParameters['dryRun'] = requestParameters.dryRun
  }
  if (requestParameters.fieldManager !== undefined) {
    queryParameters['fieldManager'] = requestParameters.fieldManager
  }
  const headerParameters: HTTPHeaders = {}

  const response = await request(
    {
      path: `/apis/apiregistration.k8s.io/v1/apiservices`,
      method: 'POST',
      headers: headerParameters,
      query: queryParameters,
      body: requestParameters.body
    },
    ...requestOptsArray
  )
  return new JSONApiResponse<any>(response)
}

/**
 * create an APIService
 */
export async function createAPIService(
  requestParameters: CreateAPIServiceRequest,
  ...requestOptsArray: Partial<RequestOpts>[]
): Promise<V1APIService> {
  const response = await createAPIServiceRaw(requestParameters, ...requestOptsArray)
  return await response.value()
}

/**
 * delete an APIService
 */
export async function deleteAPIServiceRaw(
  requestParameters: DeleteAPIServiceRequest,
  ...requestOptsArray: Partial<RequestOpts>[]
): Promise<ApiResponse<V1Status>> {
  if (requestParameters.name === null || requestParameters.name === undefined) {
    throw new Error(
      'Required parameter requestParameters.name was null or undefined when calling deleteAPIService.'
    )
  }
  const queryParameters: HTTPQuery = {}
  if (requestParameters.pretty !== undefined) {
    queryParameters['pretty'] = requestParameters.pretty
  }
  if (requestParameters.dryRun !== undefined) {
    queryParameters['dryRun'] = requestParameters.dryRun
  }
  if (requestParameters.gracePeriodSeconds !== undefined) {
    queryParameters['gracePeriodSeconds'] = requestParameters.gracePeriodSeconds
  }
  if (requestParameters.orphanDependents !== undefined) {
    queryParameters['orphanDependents'] = requestParameters.orphanDependents
  }
  if (requestParameters.propagationPolicy !== undefined) {
    queryParameters['propagationPolicy'] = requestParameters.propagationPolicy
  }
  const headerParameters: HTTPHeaders = {}

  const response = await request(
    {
      path: `/apis/apiregistration.k8s.io/v1/apiservices/{name}`.replace(
        `{${'name'}}`,
        encodeURIComponent(String(requestParameters.name))
      ),
      method: 'DELETE',
      headers: headerParameters,
      query: queryParameters,
      body: requestParameters.body
    },
    ...requestOptsArray
  )
  return new JSONApiResponse<any>(response)
}

/**
 * delete an APIService
 */
export async function deleteAPIService(
  requestParameters: DeleteAPIServiceRequest,
  ...requestOptsArray: Partial<RequestOpts>[]
): Promise<V1Status> {
  const response = await deleteAPIServiceRaw(requestParameters, ...requestOptsArray)
  return await response.value()
}

/**
 * delete collection of APIService
 */
export async function deleteCollectionAPIServiceRaw(
  requestParameters: DeleteCollectionAPIServiceRequest,
  ...requestOptsArray: Partial<RequestOpts>[]
): Promise<ApiResponse<V1Status>> {
  const queryParameters: HTTPQuery = {}
  if (requestParameters.pretty !== undefined) {
    queryParameters['pretty'] = requestParameters.pretty
  }
  if (requestParameters._continue !== undefined) {
    queryParameters['continue'] = requestParameters._continue
  }
  if (requestParameters.dryRun !== undefined) {
    queryParameters['dryRun'] = requestParameters.dryRun
  }
  if (requestParameters.fieldSelector !== undefined) {
    queryParameters['fieldSelector'] = requestParameters.fieldSelector
  }
  if (requestParameters.gracePeriodSeconds !== undefined) {
    queryParameters['gracePeriodSeconds'] = requestParameters.gracePeriodSeconds
  }
  if (requestParameters.labelSelector !== undefined) {
    queryParameters['labelSelector'] = requestParameters.labelSelector
  }
  if (requestParameters.limit !== undefined) {
    queryParameters['limit'] = requestParameters.limit
  }
  if (requestParameters.orphanDependents !== undefined) {
    queryParameters['orphanDependents'] = requestParameters.orphanDependents
  }
  if (requestParameters.propagationPolicy !== undefined) {
    queryParameters['propagationPolicy'] = requestParameters.propagationPolicy
  }
  if (requestParameters.resourceVersion !== undefined) {
    queryParameters['resourceVersion'] = requestParameters.resourceVersion
  }
  if (requestParameters.resourceVersionMatch !== undefined) {
    queryParameters['resourceVersionMatch'] = requestParameters.resourceVersionMatch
  }
  if (requestParameters.timeoutSeconds !== undefined) {
    queryParameters['timeoutSeconds'] = requestParameters.timeoutSeconds
  }
  const headerParameters: HTTPHeaders = {}

  const response = await request(
    {
      path: `/apis/apiregistration.k8s.io/v1/apiservices`,
      method: 'DELETE',
      headers: headerParameters,
      query: queryParameters,
      body: requestParameters.body
    },
    ...requestOptsArray
  )
  return new JSONApiResponse<any>(response)
}

/**
 * delete collection of APIService
 */
export async function deleteCollectionAPIService(
  requestParameters: DeleteCollectionAPIServiceRequest,
  ...requestOptsArray: Partial<RequestOpts>[]
): Promise<V1Status> {
  const response = await deleteCollectionAPIServiceRaw(requestParameters, ...requestOptsArray)
  return await response.value()
}

/**
 * get available resources
 */
export async function getAPIResourcesRaw(
  ...requestOptsArray: Partial<RequestOpts>[]
): Promise<ApiResponse<V1APIResourceList>> {
  const queryParameters: HTTPQuery = {}
  const headerParameters: HTTPHeaders = {}

  const response = await request(
    {
      path: `/apis/apiregistration.k8s.io/v1/`,
      method: 'GET',
      headers: headerParameters,
      query: queryParameters
    },
    ...requestOptsArray
  )
  return new JSONApiResponse<any>(response)
}

/**
 * get available resources
 */
export async function getAPIResources(
  ...requestOptsArray: Partial<RequestOpts>[]
): Promise<V1APIResourceList> {
  const response = await getAPIResourcesRaw(...requestOptsArray)
  return await response.value()
}

/**
 * list or watch objects of kind APIService
 */
export async function watchListAPIService(
  requestParameters: ListAPIServiceRequest,
  callback: (event: KubeEvent<ItemType<V1APIServiceList>>) => void,
  ...requestOptsArray: Partial<RequestOpts>[]
): Promise<void> {
  const queryParameters: HTTPQuery = { watch: true }
  if (requestParameters.pretty !== undefined) {
    queryParameters['pretty'] = requestParameters.pretty
  }
  if (requestParameters.allowWatchBookmarks !== undefined) {
    queryParameters['allowWatchBookmarks'] = requestParameters.allowWatchBookmarks
  }
  if (requestParameters._continue !== undefined) {
    queryParameters['continue'] = requestParameters._continue
  }
  if (requestParameters.fieldSelector !== undefined) {
    queryParameters['fieldSelector'] = requestParameters.fieldSelector
  }
  if (requestParameters.labelSelector !== undefined) {
    queryParameters['labelSelector'] = requestParameters.labelSelector
  }
  if (requestParameters.limit !== undefined) {
    queryParameters['limit'] = requestParameters.limit
  }
  if (requestParameters.resourceVersion !== undefined) {
    queryParameters['resourceVersion'] = requestParameters.resourceVersion
  }
  if (requestParameters.resourceVersionMatch !== undefined) {
    queryParameters['resourceVersionMatch'] = requestParameters.resourceVersionMatch
  }
  if (requestParameters.timeoutSeconds !== undefined) {
    queryParameters['timeoutSeconds'] = requestParameters.timeoutSeconds
  }
  const headerParameters: HTTPHeaders = {}

  await requestStream<ItemType<V1APIServiceList>>(
    callback,
    {
      path: `/apis/apiregistration.k8s.io/v1/apiservices`,
      method: 'GET',
      headers: headerParameters,
      query: queryParameters
    },
    ...requestOptsArray
  )
}

/**
 * list or watch objects of kind APIService
 */
export async function listAPIServiceRaw(
  requestParameters: ListAPIServiceRequest,
  ...requestOptsArray: Partial<RequestOpts>[]
): Promise<ApiResponse<V1APIServiceList>> {
  const queryParameters: HTTPQuery = {}
  if (requestParameters.pretty !== undefined) {
    queryParameters['pretty'] = requestParameters.pretty
  }
  if (requestParameters.allowWatchBookmarks !== undefined) {
    queryParameters['allowWatchBookmarks'] = requestParameters.allowWatchBookmarks
  }
  if (requestParameters._continue !== undefined) {
    queryParameters['continue'] = requestParameters._continue
  }
  if (requestParameters.fieldSelector !== undefined) {
    queryParameters['fieldSelector'] = requestParameters.fieldSelector
  }
  if (requestParameters.labelSelector !== undefined) {
    queryParameters['labelSelector'] = requestParameters.labelSelector
  }
  if (requestParameters.limit !== undefined) {
    queryParameters['limit'] = requestParameters.limit
  }
  if (requestParameters.resourceVersion !== undefined) {
    queryParameters['resourceVersion'] = requestParameters.resourceVersion
  }
  if (requestParameters.resourceVersionMatch !== undefined) {
    queryParameters['resourceVersionMatch'] = requestParameters.resourceVersionMatch
  }
  if (requestParameters.timeoutSeconds !== undefined) {
    queryParameters['timeoutSeconds'] = requestParameters.timeoutSeconds
  }
  const headerParameters: HTTPHeaders = {}

  const response = await request(
    {
      path: `/apis/apiregistration.k8s.io/v1/apiservices`,
      method: 'GET',
      headers: headerParameters,
      query: queryParameters
    },
    ...requestOptsArray
  )
  return new JSONApiResponse<any>(response)
}

/**
 * list or watch objects of kind APIService
 */
export async function listAPIService(
  requestParameters: ListAPIServiceRequest,
  ...requestOptsArray: Partial<RequestOpts>[]
): Promise<V1APIServiceList> {
  const response = await listAPIServiceRaw(requestParameters, ...requestOptsArray)
  return await response.value()
}

/**
 * partially update the specified APIService
 */
export async function patchAPIServiceRaw(
  requestParameters: PatchAPIServiceRequest,
  ...requestOptsArray: Partial<RequestOpts>[]
): Promise<ApiResponse<V1APIService>> {
  if (requestParameters.name === null || requestParameters.name === undefined) {
    throw new Error(
      'Required parameter requestParameters.name was null or undefined when calling patchAPIService.'
    )
  }
  if (requestParameters.body === null || requestParameters.body === undefined) {
    throw new Error(
      'Required parameter requestParameters.body was null or undefined when calling patchAPIService.'
    )
  }
  const queryParameters: HTTPQuery = {}
  if (requestParameters.pretty !== undefined) {
    queryParameters['pretty'] = requestParameters.pretty
  }
  if (requestParameters.dryRun !== undefined) {
    queryParameters['dryRun'] = requestParameters.dryRun
  }
  if (requestParameters.fieldManager !== undefined) {
    queryParameters['fieldManager'] = requestParameters.fieldManager
  }
  if (requestParameters.force !== undefined) {
    queryParameters['force'] = requestParameters.force
  }
  const headerParameters: HTTPHeaders = {}

  const response = await request(
    {
      path: `/apis/apiregistration.k8s.io/v1/apiservices/{name}`.replace(
        `{${'name'}}`,
        encodeURIComponent(String(requestParameters.name))
      ),
      method: 'PATCH',
      headers: headerParameters,
      query: queryParameters,
      body: requestParameters.body as any
    },
    ...requestOptsArray
  )
  return new JSONApiResponse<any>(response)
}

/**
 * partially update the specified APIService
 */
export async function patchAPIService(
  requestParameters: PatchAPIServiceRequest,
  ...requestOptsArray: Partial<RequestOpts>[]
): Promise<V1APIService> {
  const response = await patchAPIServiceRaw(requestParameters, ...requestOptsArray)
  return await response.value()
}

/**
 * partially update status of the specified APIService
 */
export async function patchAPIServiceStatusRaw(
  requestParameters: PatchAPIServiceStatusRequest,
  ...requestOptsArray: Partial<RequestOpts>[]
): Promise<ApiResponse<V1APIService>> {
  if (requestParameters.name === null || requestParameters.name === undefined) {
    throw new Error(
      'Required parameter requestParameters.name was null or undefined when calling patchAPIServiceStatus.'
    )
  }
  if (requestParameters.body === null || requestParameters.body === undefined) {
    throw new Error(
      'Required parameter requestParameters.body was null or undefined when calling patchAPIServiceStatus.'
    )
  }
  const queryParameters: HTTPQuery = {}
  if (requestParameters.pretty !== undefined) {
    queryParameters['pretty'] = requestParameters.pretty
  }
  if (requestParameters.dryRun !== undefined) {
    queryParameters['dryRun'] = requestParameters.dryRun
  }
  if (requestParameters.fieldManager !== undefined) {
    queryParameters['fieldManager'] = requestParameters.fieldManager
  }
  if (requestParameters.force !== undefined) {
    queryParameters['force'] = requestParameters.force
  }
  const headerParameters: HTTPHeaders = {}

  const response = await request(
    {
      path: `/apis/apiregistration.k8s.io/v1/apiservices/{name}/status`.replace(
        `{${'name'}}`,
        encodeURIComponent(String(requestParameters.name))
      ),
      method: 'PATCH',
      headers: headerParameters,
      query: queryParameters,
      body: requestParameters.body as any
    },
    ...requestOptsArray
  )
  return new JSONApiResponse<any>(response)
}

/**
 * partially update status of the specified APIService
 */
export async function patchAPIServiceStatus(
  requestParameters: PatchAPIServiceStatusRequest,
  ...requestOptsArray: Partial<RequestOpts>[]
): Promise<V1APIService> {
  const response = await patchAPIServiceStatusRaw(requestParameters, ...requestOptsArray)
  return await response.value()
}

/**
 * read the specified APIService
 */
export async function readAPIServiceRaw(
  requestParameters: ReadAPIServiceRequest,
  ...requestOptsArray: Partial<RequestOpts>[]
): Promise<ApiResponse<V1APIService>> {
  if (requestParameters.name === null || requestParameters.name === undefined) {
    throw new Error(
      'Required parameter requestParameters.name was null or undefined when calling readAPIService.'
    )
  }
  const queryParameters: HTTPQuery = {}
  if (requestParameters.pretty !== undefined) {
    queryParameters['pretty'] = requestParameters.pretty
  }
  if (requestParameters.exact !== undefined) {
    queryParameters['exact'] = requestParameters.exact
  }
  if (requestParameters._export !== undefined) {
    queryParameters['export'] = requestParameters._export
  }
  const headerParameters: HTTPHeaders = {}

  const response = await request(
    {
      path: `/apis/apiregistration.k8s.io/v1/apiservices/{name}`.replace(
        `{${'name'}}`,
        encodeURIComponent(String(requestParameters.name))
      ),
      method: 'GET',
      headers: headerParameters,
      query: queryParameters
    },
    ...requestOptsArray
  )
  return new JSONApiResponse<any>(response)
}

/**
 * read the specified APIService
 */
export async function readAPIService(
  requestParameters: ReadAPIServiceRequest,
  ...requestOptsArray: Partial<RequestOpts>[]
): Promise<V1APIService> {
  const response = await readAPIServiceRaw(requestParameters, ...requestOptsArray)
  return await response.value()
}

/**
 * read status of the specified APIService
 */
export async function readAPIServiceStatusRaw(
  requestParameters: ReadAPIServiceStatusRequest,
  ...requestOptsArray: Partial<RequestOpts>[]
): Promise<ApiResponse<V1APIService>> {
  if (requestParameters.name === null || requestParameters.name === undefined) {
    throw new Error(
      'Required parameter requestParameters.name was null or undefined when calling readAPIServiceStatus.'
    )
  }
  const queryParameters: HTTPQuery = {}
  if (requestParameters.pretty !== undefined) {
    queryParameters['pretty'] = requestParameters.pretty
  }
  const headerParameters: HTTPHeaders = {}

  const response = await request(
    {
      path: `/apis/apiregistration.k8s.io/v1/apiservices/{name}/status`.replace(
        `{${'name'}}`,
        encodeURIComponent(String(requestParameters.name))
      ),
      method: 'GET',
      headers: headerParameters,
      query: queryParameters
    },
    ...requestOptsArray
  )
  return new JSONApiResponse<any>(response)
}

/**
 * read status of the specified APIService
 */
export async function readAPIServiceStatus(
  requestParameters: ReadAPIServiceStatusRequest,
  ...requestOptsArray: Partial<RequestOpts>[]
): Promise<V1APIService> {
  const response = await readAPIServiceStatusRaw(requestParameters, ...requestOptsArray)
  return await response.value()
}

/**
 * replace the specified APIService
 */
export async function replaceAPIServiceRaw(
  requestParameters: ReplaceAPIServiceRequest,
  ...requestOptsArray: Partial<RequestOpts>[]
): Promise<ApiResponse<V1APIService>> {
  if (requestParameters.name === null || requestParameters.name === undefined) {
    throw new Error(
      'Required parameter requestParameters.name was null or undefined when calling replaceAPIService.'
    )
  }
  if (requestParameters.body === null || requestParameters.body === undefined) {
    throw new Error(
      'Required parameter requestParameters.body was null or undefined when calling replaceAPIService.'
    )
  }
  const queryParameters: HTTPQuery = {}
  if (requestParameters.pretty !== undefined) {
    queryParameters['pretty'] = requestParameters.pretty
  }
  if (requestParameters.dryRun !== undefined) {
    queryParameters['dryRun'] = requestParameters.dryRun
  }
  if (requestParameters.fieldManager !== undefined) {
    queryParameters['fieldManager'] = requestParameters.fieldManager
  }
  const headerParameters: HTTPHeaders = {}

  const response = await request(
    {
      path: `/apis/apiregistration.k8s.io/v1/apiservices/{name}`.replace(
        `{${'name'}}`,
        encodeURIComponent(String(requestParameters.name))
      ),
      method: 'PUT',
      headers: headerParameters,
      query: queryParameters,
      body: requestParameters.body
    },
    ...requestOptsArray
  )
  return new JSONApiResponse<any>(response)
}

/**
 * replace the specified APIService
 */
export async function replaceAPIService(
  requestParameters: ReplaceAPIServiceRequest,
  ...requestOptsArray: Partial<RequestOpts>[]
): Promise<V1APIService> {
  const response = await replaceAPIServiceRaw(requestParameters, ...requestOptsArray)
  return await response.value()
}

/**
 * replace status of the specified APIService
 */
export async function replaceAPIServiceStatusRaw(
  requestParameters: ReplaceAPIServiceStatusRequest,
  ...requestOptsArray: Partial<RequestOpts>[]
): Promise<ApiResponse<V1APIService>> {
  if (requestParameters.name === null || requestParameters.name === undefined) {
    throw new Error(
      'Required parameter requestParameters.name was null or undefined when calling replaceAPIServiceStatus.'
    )
  }
  if (requestParameters.body === null || requestParameters.body === undefined) {
    throw new Error(
      'Required parameter requestParameters.body was null or undefined when calling replaceAPIServiceStatus.'
    )
  }
  const queryParameters: HTTPQuery = {}
  if (requestParameters.pretty !== undefined) {
    queryParameters['pretty'] = requestParameters.pretty
  }
  if (requestParameters.dryRun !== undefined) {
    queryParameters['dryRun'] = requestParameters.dryRun
  }
  if (requestParameters.fieldManager !== undefined) {
    queryParameters['fieldManager'] = requestParameters.fieldManager
  }
  const headerParameters: HTTPHeaders = {}

  const response = await request(
    {
      path: `/apis/apiregistration.k8s.io/v1/apiservices/{name}/status`.replace(
        `{${'name'}}`,
        encodeURIComponent(String(requestParameters.name))
      ),
      method: 'PUT',
      headers: headerParameters,
      query: queryParameters,
      body: requestParameters.body
    },
    ...requestOptsArray
  )
  return new JSONApiResponse<any>(response)
}

/**
 * replace status of the specified APIService
 */
export async function replaceAPIServiceStatus(
  requestParameters: ReplaceAPIServiceStatusRequest,
  ...requestOptsArray: Partial<RequestOpts>[]
): Promise<V1APIService> {
  const response = await replaceAPIServiceStatusRaw(requestParameters, ...requestOptsArray)
  return await response.value()
}
