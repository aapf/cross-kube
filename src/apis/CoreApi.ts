// tslint:disable
/**
 * Kubernetes
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v1.14.4
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import * as runtime from '../runtime'
import V1APIVersions from '../models/V1APIVersions'

/**
 *
 */
export default class CoreApi extends runtime.BaseAPI {
  /**
   * get available API versions
   */
  async getAPIVersionsRaw(): Promise<runtime.ApiResponse<V1APIVersions>> {
    const queryParameters: runtime.HTTPQuery = {}
    const headerParameters: runtime.HTTPHeaders = {}

    const response = await this.request({
      path: `/api/`,
      method: 'GET',
      headers: headerParameters,
      query: queryParameters
    })
    return new runtime.JSONApiResponse<any>(response)
  }

  /**
   * get available API versions
   */
  async getAPIVersions(): Promise<V1APIVersions> {
    const response = await this.getAPIVersionsRaw()
    return await response.value()
  }
}