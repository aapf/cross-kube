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
import V1DeleteOptions from '../models/V1DeleteOptions'
import V1PriorityClass from '../models/V1PriorityClass'
import V1PriorityClassList from '../models/V1PriorityClassList'
import V1Status from '../models/V1Status'

interface CreatePriorityClassRequest {
  body: V1PriorityClass

  pretty?: string

  dryRun?: string

  fieldManager?: string
}

interface DeleteCollectionPriorityClassRequest {
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

interface DeletePriorityClassRequest {
  name: string

  pretty?: string

  dryRun?: string

  gracePeriodSeconds?: number

  orphanDependents?: boolean

  propagationPolicy?: string

  body?: V1DeleteOptions
}

interface ListPriorityClassRequest {
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

interface PatchPriorityClassRequest {
  name: string

  body: object

  pretty?: string

  dryRun?: string

  fieldManager?: string

  force?: boolean
}

interface ReadPriorityClassRequest {
  name: string

  pretty?: string

  exact?: boolean

  _export?: boolean
}

interface ReplacePriorityClassRequest {
  name: string

  body: V1PriorityClass

  pretty?: string

  dryRun?: string

  fieldManager?: string
}

/**
 * create a PriorityClass
 */
export async function createPriorityClassRaw(
  requestParameters: CreatePriorityClassRequest,
  ...requestOptsArray: Partial<RequestOpts>[]
): Promise<ApiResponse<V1PriorityClass>> {
  if (requestParameters.body === null || requestParameters.body === undefined) {
    throw new Error(
      'Required parameter requestParameters.body was null or undefined when calling createPriorityClass.'
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
      path: `/apis/scheduling.k8s.io/v1/priorityclasses`,
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
 * create a PriorityClass
 */
export async function createPriorityClass(
  requestParameters: CreatePriorityClassRequest,
  ...requestOptsArray: Partial<RequestOpts>[]
): Promise<V1PriorityClass> {
  const response = await createPriorityClassRaw(requestParameters, ...requestOptsArray)
  return await response.value()
}

/**
 * delete collection of PriorityClass
 */
export async function deleteCollectionPriorityClassRaw(
  requestParameters: DeleteCollectionPriorityClassRequest,
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
      path: `/apis/scheduling.k8s.io/v1/priorityclasses`,
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
 * delete collection of PriorityClass
 */
export async function deleteCollectionPriorityClass(
  requestParameters: DeleteCollectionPriorityClassRequest,
  ...requestOptsArray: Partial<RequestOpts>[]
): Promise<V1Status> {
  const response = await deleteCollectionPriorityClassRaw(requestParameters, ...requestOptsArray)
  return await response.value()
}

/**
 * delete a PriorityClass
 */
export async function deletePriorityClassRaw(
  requestParameters: DeletePriorityClassRequest,
  ...requestOptsArray: Partial<RequestOpts>[]
): Promise<ApiResponse<V1Status>> {
  if (requestParameters.name === null || requestParameters.name === undefined) {
    throw new Error(
      'Required parameter requestParameters.name was null or undefined when calling deletePriorityClass.'
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
      path: `/apis/scheduling.k8s.io/v1/priorityclasses/{name}`.replace(
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
 * delete a PriorityClass
 */
export async function deletePriorityClass(
  requestParameters: DeletePriorityClassRequest,
  ...requestOptsArray: Partial<RequestOpts>[]
): Promise<V1Status> {
  const response = await deletePriorityClassRaw(requestParameters, ...requestOptsArray)
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
      path: `/apis/scheduling.k8s.io/v1/`,
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
 * list or watch objects of kind PriorityClass
 */
export async function watchListPriorityClass(
  requestParameters: ListPriorityClassRequest,
  callback: (event: KubeEvent<ItemType<V1PriorityClassList>>) => void,
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

  await requestStream<ItemType<V1PriorityClassList>>(
    callback,
    {
      path: `/apis/scheduling.k8s.io/v1/priorityclasses`,
      method: 'GET',
      headers: headerParameters,
      query: queryParameters
    },
    ...requestOptsArray
  )
}

/**
 * list or watch objects of kind PriorityClass
 */
export async function listPriorityClassRaw(
  requestParameters: ListPriorityClassRequest,
  ...requestOptsArray: Partial<RequestOpts>[]
): Promise<ApiResponse<V1PriorityClassList>> {
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
      path: `/apis/scheduling.k8s.io/v1/priorityclasses`,
      method: 'GET',
      headers: headerParameters,
      query: queryParameters
    },
    ...requestOptsArray
  )
  return new JSONApiResponse<any>(response)
}

/**
 * list or watch objects of kind PriorityClass
 */
export async function listPriorityClass(
  requestParameters: ListPriorityClassRequest,
  ...requestOptsArray: Partial<RequestOpts>[]
): Promise<V1PriorityClassList> {
  const response = await listPriorityClassRaw(requestParameters, ...requestOptsArray)
  return await response.value()
}

/**
 * partially update the specified PriorityClass
 */
export async function patchPriorityClassRaw(
  requestParameters: PatchPriorityClassRequest,
  ...requestOptsArray: Partial<RequestOpts>[]
): Promise<ApiResponse<V1PriorityClass>> {
  if (requestParameters.name === null || requestParameters.name === undefined) {
    throw new Error(
      'Required parameter requestParameters.name was null or undefined when calling patchPriorityClass.'
    )
  }
  if (requestParameters.body === null || requestParameters.body === undefined) {
    throw new Error(
      'Required parameter requestParameters.body was null or undefined when calling patchPriorityClass.'
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
      path: `/apis/scheduling.k8s.io/v1/priorityclasses/{name}`.replace(
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
 * partially update the specified PriorityClass
 */
export async function patchPriorityClass(
  requestParameters: PatchPriorityClassRequest,
  ...requestOptsArray: Partial<RequestOpts>[]
): Promise<V1PriorityClass> {
  const response = await patchPriorityClassRaw(requestParameters, ...requestOptsArray)
  return await response.value()
}

/**
 * read the specified PriorityClass
 */
export async function readPriorityClassRaw(
  requestParameters: ReadPriorityClassRequest,
  ...requestOptsArray: Partial<RequestOpts>[]
): Promise<ApiResponse<V1PriorityClass>> {
  if (requestParameters.name === null || requestParameters.name === undefined) {
    throw new Error(
      'Required parameter requestParameters.name was null or undefined when calling readPriorityClass.'
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
      path: `/apis/scheduling.k8s.io/v1/priorityclasses/{name}`.replace(
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
 * read the specified PriorityClass
 */
export async function readPriorityClass(
  requestParameters: ReadPriorityClassRequest,
  ...requestOptsArray: Partial<RequestOpts>[]
): Promise<V1PriorityClass> {
  const response = await readPriorityClassRaw(requestParameters, ...requestOptsArray)
  return await response.value()
}

/**
 * replace the specified PriorityClass
 */
export async function replacePriorityClassRaw(
  requestParameters: ReplacePriorityClassRequest,
  ...requestOptsArray: Partial<RequestOpts>[]
): Promise<ApiResponse<V1PriorityClass>> {
  if (requestParameters.name === null || requestParameters.name === undefined) {
    throw new Error(
      'Required parameter requestParameters.name was null or undefined when calling replacePriorityClass.'
    )
  }
  if (requestParameters.body === null || requestParameters.body === undefined) {
    throw new Error(
      'Required parameter requestParameters.body was null or undefined when calling replacePriorityClass.'
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
      path: `/apis/scheduling.k8s.io/v1/priorityclasses/{name}`.replace(
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
 * replace the specified PriorityClass
 */
export async function replacePriorityClass(
  requestParameters: ReplacePriorityClassRequest,
  ...requestOptsArray: Partial<RequestOpts>[]
): Promise<V1PriorityClass> {
  const response = await replacePriorityClassRaw(requestParameters, ...requestOptsArray)
  return await response.value()
}
