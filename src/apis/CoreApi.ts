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
import V1APIVersions from '../models/V1APIVersions'

/**
 * get available API versions
 */
export async function getAPIVersionsRaw(
  ...requestOptsArray: Partial<RequestOpts>[]
): Promise<ApiResponse<V1APIVersions>> {
  const queryParameters: HTTPQuery = {}
  const headerParameters: HTTPHeaders = {}

  const response = await request(
    {
      path: `/api/`,
      method: 'GET',
      headers: headerParameters,
      query: queryParameters
    },
    ...requestOptsArray
  )
  return new JSONApiResponse<any>(response)
}

/**
 * get available API versions
 */
export async function getAPIVersions(
  ...requestOptsArray: Partial<RequestOpts>[]
): Promise<V1APIVersions> {
  const response = await getAPIVersionsRaw(...requestOptsArray)
  return await response.value()
}
