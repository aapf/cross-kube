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
import V1APIGroupList from '../models/V1APIGroupList'

/**
 *
 */
export default class ApisApi extends runtime.BaseAPI {
  /**
   * get available API versions
   */
  async getAPIVersionsRaw(): Promise<runtime.ApiResponse<V1APIGroupList>> {
    const queryParameters: runtime.HTTPQuery = {}
    const headerParameters: runtime.HTTPHeaders = {}

    const response = await this.request({
      path: `/apis/`,
      method: 'GET',
      headers: headerParameters,
      query: queryParameters
    })
    return new runtime.JSONApiResponse<any>(response)
  }

  /**
   * get available API versions
   */
  async getAPIVersions(): Promise<V1APIGroupList> {
    const response = await this.getAPIVersionsRaw()
    return await response.value()
  }
}