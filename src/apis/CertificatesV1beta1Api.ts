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
import V1APIResourceList from '../models/V1APIResourceList'
import V1DeleteOptions from '../models/V1DeleteOptions'
import V1Status from '../models/V1Status'
import V1beta1CertificateSigningRequest from '../models/V1beta1CertificateSigningRequest'
import V1beta1CertificateSigningRequestList from '../models/V1beta1CertificateSigningRequestList'

interface CreateCertificateSigningRequestRequest {
  body: V1beta1CertificateSigningRequest
  pretty?: string
  dryRun?: string
  fieldManager?: string
}

interface DeleteCertificateSigningRequestRequest {
  name: string
  pretty?: string
  dryRun?: string
  gracePeriodSeconds?: number
  orphanDependents?: boolean
  propagationPolicy?: string
  body?: V1DeleteOptions
}

interface DeleteCollectionCertificateSigningRequestRequest {
  pretty?: string
  _continue?: string
  fieldSelector?: string
  labelSelector?: string
  limit?: number
  resourceVersion?: string
  timeoutSeconds?: number
}

interface ListCertificateSigningRequestRequest {
  pretty?: string
  _continue?: string
  fieldSelector?: string
  labelSelector?: string
  limit?: number
  resourceVersion?: string
  timeoutSeconds?: number
}

interface PatchCertificateSigningRequestRequest {
  name: string
  body: object
  pretty?: string
  dryRun?: string
  fieldManager?: string
  force?: boolean
}

interface PatchCertificateSigningRequestStatusRequest {
  name: string
  body: object
  pretty?: string
  dryRun?: string
  fieldManager?: string
  force?: boolean
}

interface ReadCertificateSigningRequestRequest {
  name: string
  pretty?: string
  exact?: boolean
  _export?: boolean
}

interface ReadCertificateSigningRequestStatusRequest {
  name: string
  pretty?: string
}

interface ReplaceCertificateSigningRequestRequest {
  name: string
  body: V1beta1CertificateSigningRequest
  pretty?: string
  dryRun?: string
  fieldManager?: string
}

interface ReplaceCertificateSigningRequestApprovalRequest {
  name: string
  body: V1beta1CertificateSigningRequest
  dryRun?: string
  fieldManager?: string
  pretty?: string
}

interface ReplaceCertificateSigningRequestStatusRequest {
  name: string
  body: V1beta1CertificateSigningRequest
  pretty?: string
  dryRun?: string
  fieldManager?: string
}

/**
 *
 */
export default class CertificatesV1beta1Api extends runtime.BaseAPI {
  /**
   * create a CertificateSigningRequest
   */
  async createCertificateSigningRequestRaw(
    requestParameters: CreateCertificateSigningRequestRequest
  ): Promise<runtime.ApiResponse<V1beta1CertificateSigningRequest>> {
    if (requestParameters.body === null || requestParameters.body === undefined) {
      throw new Error(
        'Required parameter requestParameters.body was null or undefined when calling createCertificateSigningRequest.'
      )
    }
    const queryParameters: runtime.HTTPQuery = {}
    if (requestParameters.pretty !== undefined) {
      queryParameters['pretty'] = requestParameters.pretty
    }
    if (requestParameters.dryRun !== undefined) {
      queryParameters['dryRun'] = requestParameters.dryRun
    }
    if (requestParameters.fieldManager !== undefined) {
      queryParameters['fieldManager'] = requestParameters.fieldManager
    }
    const headerParameters: runtime.HTTPHeaders = {}

    const response = await this.request({
      path: `/apis/certificates.k8s.io/v1beta1/certificatesigningrequests`,
      method: 'POST',
      headers: headerParameters,
      query: queryParameters,
      body: requestParameters.body
    })
    return new runtime.JSONApiResponse<any>(response)
  }

  /**
   * create a CertificateSigningRequest
   */
  async createCertificateSigningRequest(
    requestParameters: CreateCertificateSigningRequestRequest
  ): Promise<V1beta1CertificateSigningRequest> {
    const response = await this.createCertificateSigningRequestRaw(requestParameters)
    return await response.value()
  }

  /**
   * delete a CertificateSigningRequest
   */
  async deleteCertificateSigningRequestRaw(
    requestParameters: DeleteCertificateSigningRequestRequest
  ): Promise<runtime.ApiResponse<V1Status>> {
    if (requestParameters.name === null || requestParameters.name === undefined) {
      throw new Error(
        'Required parameter requestParameters.name was null or undefined when calling deleteCertificateSigningRequest.'
      )
    }
    const queryParameters: runtime.HTTPQuery = {}
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
    const headerParameters: runtime.HTTPHeaders = {}

    const response = await this.request({
      path: `/apis/certificates.k8s.io/v1beta1/certificatesigningrequests/{name}`.replace(
        `{${'name'}}`,
        encodeURIComponent(String(requestParameters.name))
      ),
      method: 'DELETE',
      headers: headerParameters,
      query: queryParameters,
      body: requestParameters.body
    })
    return new runtime.JSONApiResponse<any>(response)
  }

  /**
   * delete a CertificateSigningRequest
   */
  async deleteCertificateSigningRequest(
    requestParameters: DeleteCertificateSigningRequestRequest
  ): Promise<V1Status> {
    const response = await this.deleteCertificateSigningRequestRaw(requestParameters)
    return await response.value()
  }

  /**
   * delete collection of CertificateSigningRequest
   */
  async deleteCollectionCertificateSigningRequestRaw(
    requestParameters: DeleteCollectionCertificateSigningRequestRequest
  ): Promise<runtime.ApiResponse<V1Status>> {
    const queryParameters: runtime.HTTPQuery = {}
    if (requestParameters.pretty !== undefined) {
      queryParameters['pretty'] = requestParameters.pretty
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
    if (requestParameters.timeoutSeconds !== undefined) {
      queryParameters['timeoutSeconds'] = requestParameters.timeoutSeconds
    }
    const headerParameters: runtime.HTTPHeaders = {}

    const response = await this.request({
      path: `/apis/certificates.k8s.io/v1beta1/certificatesigningrequests`,
      method: 'DELETE',
      headers: headerParameters,
      query: queryParameters
    })
    return new runtime.JSONApiResponse<any>(response)
  }

  /**
   * delete collection of CertificateSigningRequest
   */
  async deleteCollectionCertificateSigningRequest(
    requestParameters: DeleteCollectionCertificateSigningRequestRequest
  ): Promise<V1Status> {
    const response = await this.deleteCollectionCertificateSigningRequestRaw(requestParameters)
    return await response.value()
  }

  /**
   * get available resources
   */
  async getAPIResourcesRaw(): Promise<runtime.ApiResponse<V1APIResourceList>> {
    const queryParameters: runtime.HTTPQuery = {}
    const headerParameters: runtime.HTTPHeaders = {}

    const response = await this.request({
      path: `/apis/certificates.k8s.io/v1beta1/`,
      method: 'GET',
      headers: headerParameters,
      query: queryParameters
    })
    return new runtime.JSONApiResponse<any>(response)
  }

  /**
   * get available resources
   */
  async getAPIResources(): Promise<V1APIResourceList> {
    const response = await this.getAPIResourcesRaw()
    return await response.value()
  }

  /**
   * list or watch objects of kind CertificateSigningRequest
   */
  async watchListCertificateSigningRequest(
    requestParameters: ListCertificateSigningRequestRequest,
    callback: (
      event: runtime.KubeEvent<runtime.ItemType<V1beta1CertificateSigningRequestList>>
    ) => void,
    signal?: AbortSignal
  ): Promise<void> {
    const queryParameters: runtime.HTTPQuery = { watch: true }
    if (requestParameters.pretty !== undefined) {
      queryParameters['pretty'] = requestParameters.pretty
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
    if (requestParameters.timeoutSeconds !== undefined) {
      queryParameters['timeoutSeconds'] = requestParameters.timeoutSeconds
    }
    const headerParameters: runtime.HTTPHeaders = {}

    await this.requestStream<runtime.ItemType<V1beta1CertificateSigningRequestList>>(
      {
        path: `/apis/certificates.k8s.io/v1beta1/certificatesigningrequests`,
        method: 'GET',
        headers: headerParameters,
        query: queryParameters,
        signal
      },
      callback
    )
  }

  /**
   * list or watch objects of kind CertificateSigningRequest
   */
  async listCertificateSigningRequestRaw(
    requestParameters: ListCertificateSigningRequestRequest
  ): Promise<runtime.ApiResponse<V1beta1CertificateSigningRequestList>> {
    const queryParameters: runtime.HTTPQuery = {}
    if (requestParameters.pretty !== undefined) {
      queryParameters['pretty'] = requestParameters.pretty
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
    if (requestParameters.timeoutSeconds !== undefined) {
      queryParameters['timeoutSeconds'] = requestParameters.timeoutSeconds
    }
    const headerParameters: runtime.HTTPHeaders = {}

    const response = await this.request({
      path: `/apis/certificates.k8s.io/v1beta1/certificatesigningrequests`,
      method: 'GET',
      headers: headerParameters,
      query: queryParameters
    })
    return new runtime.JSONApiResponse<any>(response)
  }

  /**
   * list or watch objects of kind CertificateSigningRequest
   */
  async listCertificateSigningRequest(
    requestParameters: ListCertificateSigningRequestRequest
  ): Promise<V1beta1CertificateSigningRequestList> {
    const response = await this.listCertificateSigningRequestRaw(requestParameters)
    return await response.value()
  }

  /**
   * partially update the specified CertificateSigningRequest
   */
  async patchCertificateSigningRequestRaw(
    requestParameters: PatchCertificateSigningRequestRequest
  ): Promise<runtime.ApiResponse<V1beta1CertificateSigningRequest>> {
    if (requestParameters.name === null || requestParameters.name === undefined) {
      throw new Error(
        'Required parameter requestParameters.name was null or undefined when calling patchCertificateSigningRequest.'
      )
    }
    if (requestParameters.body === null || requestParameters.body === undefined) {
      throw new Error(
        'Required parameter requestParameters.body was null or undefined when calling patchCertificateSigningRequest.'
      )
    }
    const queryParameters: runtime.HTTPQuery = {}
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
    const headerParameters: runtime.HTTPHeaders = {}

    const response = await this.request({
      path: `/apis/certificates.k8s.io/v1beta1/certificatesigningrequests/{name}`.replace(
        `{${'name'}}`,
        encodeURIComponent(String(requestParameters.name))
      ),
      method: 'PATCH',
      headers: headerParameters,
      query: queryParameters,
      body: requestParameters.body as any
    })
    return new runtime.JSONApiResponse<any>(response)
  }

  /**
   * partially update the specified CertificateSigningRequest
   */
  async patchCertificateSigningRequest(
    requestParameters: PatchCertificateSigningRequestRequest
  ): Promise<V1beta1CertificateSigningRequest> {
    const response = await this.patchCertificateSigningRequestRaw(requestParameters)
    return await response.value()
  }

  /**
   * partially update status of the specified CertificateSigningRequest
   */
  async patchCertificateSigningRequestStatusRaw(
    requestParameters: PatchCertificateSigningRequestStatusRequest
  ): Promise<runtime.ApiResponse<V1beta1CertificateSigningRequest>> {
    if (requestParameters.name === null || requestParameters.name === undefined) {
      throw new Error(
        'Required parameter requestParameters.name was null or undefined when calling patchCertificateSigningRequestStatus.'
      )
    }
    if (requestParameters.body === null || requestParameters.body === undefined) {
      throw new Error(
        'Required parameter requestParameters.body was null or undefined when calling patchCertificateSigningRequestStatus.'
      )
    }
    const queryParameters: runtime.HTTPQuery = {}
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
    const headerParameters: runtime.HTTPHeaders = {}

    const response = await this.request({
      path: `/apis/certificates.k8s.io/v1beta1/certificatesigningrequests/{name}/status`.replace(
        `{${'name'}}`,
        encodeURIComponent(String(requestParameters.name))
      ),
      method: 'PATCH',
      headers: headerParameters,
      query: queryParameters,
      body: requestParameters.body as any
    })
    return new runtime.JSONApiResponse<any>(response)
  }

  /**
   * partially update status of the specified CertificateSigningRequest
   */
  async patchCertificateSigningRequestStatus(
    requestParameters: PatchCertificateSigningRequestStatusRequest
  ): Promise<V1beta1CertificateSigningRequest> {
    const response = await this.patchCertificateSigningRequestStatusRaw(requestParameters)
    return await response.value()
  }

  /**
   * read the specified CertificateSigningRequest
   */
  async readCertificateSigningRequestRaw(
    requestParameters: ReadCertificateSigningRequestRequest
  ): Promise<runtime.ApiResponse<V1beta1CertificateSigningRequest>> {
    if (requestParameters.name === null || requestParameters.name === undefined) {
      throw new Error(
        'Required parameter requestParameters.name was null or undefined when calling readCertificateSigningRequest.'
      )
    }
    const queryParameters: runtime.HTTPQuery = {}
    if (requestParameters.pretty !== undefined) {
      queryParameters['pretty'] = requestParameters.pretty
    }
    if (requestParameters.exact !== undefined) {
      queryParameters['exact'] = requestParameters.exact
    }
    if (requestParameters._export !== undefined) {
      queryParameters['export'] = requestParameters._export
    }
    const headerParameters: runtime.HTTPHeaders = {}

    const response = await this.request({
      path: `/apis/certificates.k8s.io/v1beta1/certificatesigningrequests/{name}`.replace(
        `{${'name'}}`,
        encodeURIComponent(String(requestParameters.name))
      ),
      method: 'GET',
      headers: headerParameters,
      query: queryParameters
    })
    return new runtime.JSONApiResponse<any>(response)
  }

  /**
   * read the specified CertificateSigningRequest
   */
  async readCertificateSigningRequest(
    requestParameters: ReadCertificateSigningRequestRequest
  ): Promise<V1beta1CertificateSigningRequest> {
    const response = await this.readCertificateSigningRequestRaw(requestParameters)
    return await response.value()
  }

  /**
   * read status of the specified CertificateSigningRequest
   */
  async readCertificateSigningRequestStatusRaw(
    requestParameters: ReadCertificateSigningRequestStatusRequest
  ): Promise<runtime.ApiResponse<V1beta1CertificateSigningRequest>> {
    if (requestParameters.name === null || requestParameters.name === undefined) {
      throw new Error(
        'Required parameter requestParameters.name was null or undefined when calling readCertificateSigningRequestStatus.'
      )
    }
    const queryParameters: runtime.HTTPQuery = {}
    if (requestParameters.pretty !== undefined) {
      queryParameters['pretty'] = requestParameters.pretty
    }
    const headerParameters: runtime.HTTPHeaders = {}

    const response = await this.request({
      path: `/apis/certificates.k8s.io/v1beta1/certificatesigningrequests/{name}/status`.replace(
        `{${'name'}}`,
        encodeURIComponent(String(requestParameters.name))
      ),
      method: 'GET',
      headers: headerParameters,
      query: queryParameters
    })
    return new runtime.JSONApiResponse<any>(response)
  }

  /**
   * read status of the specified CertificateSigningRequest
   */
  async readCertificateSigningRequestStatus(
    requestParameters: ReadCertificateSigningRequestStatusRequest
  ): Promise<V1beta1CertificateSigningRequest> {
    const response = await this.readCertificateSigningRequestStatusRaw(requestParameters)
    return await response.value()
  }

  /**
   * replace the specified CertificateSigningRequest
   */
  async replaceCertificateSigningRequestRaw(
    requestParameters: ReplaceCertificateSigningRequestRequest
  ): Promise<runtime.ApiResponse<V1beta1CertificateSigningRequest>> {
    if (requestParameters.name === null || requestParameters.name === undefined) {
      throw new Error(
        'Required parameter requestParameters.name was null or undefined when calling replaceCertificateSigningRequest.'
      )
    }
    if (requestParameters.body === null || requestParameters.body === undefined) {
      throw new Error(
        'Required parameter requestParameters.body was null or undefined when calling replaceCertificateSigningRequest.'
      )
    }
    const queryParameters: runtime.HTTPQuery = {}
    if (requestParameters.pretty !== undefined) {
      queryParameters['pretty'] = requestParameters.pretty
    }
    if (requestParameters.dryRun !== undefined) {
      queryParameters['dryRun'] = requestParameters.dryRun
    }
    if (requestParameters.fieldManager !== undefined) {
      queryParameters['fieldManager'] = requestParameters.fieldManager
    }
    const headerParameters: runtime.HTTPHeaders = {}

    const response = await this.request({
      path: `/apis/certificates.k8s.io/v1beta1/certificatesigningrequests/{name}`.replace(
        `{${'name'}}`,
        encodeURIComponent(String(requestParameters.name))
      ),
      method: 'PUT',
      headers: headerParameters,
      query: queryParameters,
      body: requestParameters.body
    })
    return new runtime.JSONApiResponse<any>(response)
  }

  /**
   * replace the specified CertificateSigningRequest
   */
  async replaceCertificateSigningRequest(
    requestParameters: ReplaceCertificateSigningRequestRequest
  ): Promise<V1beta1CertificateSigningRequest> {
    const response = await this.replaceCertificateSigningRequestRaw(requestParameters)
    return await response.value()
  }

  /**
   * replace approval of the specified CertificateSigningRequest
   */
  async replaceCertificateSigningRequestApprovalRaw(
    requestParameters: ReplaceCertificateSigningRequestApprovalRequest
  ): Promise<runtime.ApiResponse<V1beta1CertificateSigningRequest>> {
    if (requestParameters.name === null || requestParameters.name === undefined) {
      throw new Error(
        'Required parameter requestParameters.name was null or undefined when calling replaceCertificateSigningRequestApproval.'
      )
    }
    if (requestParameters.body === null || requestParameters.body === undefined) {
      throw new Error(
        'Required parameter requestParameters.body was null or undefined when calling replaceCertificateSigningRequestApproval.'
      )
    }
    const queryParameters: runtime.HTTPQuery = {}
    if (requestParameters.dryRun !== undefined) {
      queryParameters['dryRun'] = requestParameters.dryRun
    }
    if (requestParameters.fieldManager !== undefined) {
      queryParameters['fieldManager'] = requestParameters.fieldManager
    }
    if (requestParameters.pretty !== undefined) {
      queryParameters['pretty'] = requestParameters.pretty
    }
    const headerParameters: runtime.HTTPHeaders = {}

    const response = await this.request({
      path: `/apis/certificates.k8s.io/v1beta1/certificatesigningrequests/{name}/approval`.replace(
        `{${'name'}}`,
        encodeURIComponent(String(requestParameters.name))
      ),
      method: 'PUT',
      headers: headerParameters,
      query: queryParameters,
      body: requestParameters.body
    })
    return new runtime.JSONApiResponse<any>(response)
  }

  /**
   * replace approval of the specified CertificateSigningRequest
   */
  async replaceCertificateSigningRequestApproval(
    requestParameters: ReplaceCertificateSigningRequestApprovalRequest
  ): Promise<V1beta1CertificateSigningRequest> {
    const response = await this.replaceCertificateSigningRequestApprovalRaw(requestParameters)
    return await response.value()
  }

  /**
   * replace status of the specified CertificateSigningRequest
   */
  async replaceCertificateSigningRequestStatusRaw(
    requestParameters: ReplaceCertificateSigningRequestStatusRequest
  ): Promise<runtime.ApiResponse<V1beta1CertificateSigningRequest>> {
    if (requestParameters.name === null || requestParameters.name === undefined) {
      throw new Error(
        'Required parameter requestParameters.name was null or undefined when calling replaceCertificateSigningRequestStatus.'
      )
    }
    if (requestParameters.body === null || requestParameters.body === undefined) {
      throw new Error(
        'Required parameter requestParameters.body was null or undefined when calling replaceCertificateSigningRequestStatus.'
      )
    }
    const queryParameters: runtime.HTTPQuery = {}
    if (requestParameters.pretty !== undefined) {
      queryParameters['pretty'] = requestParameters.pretty
    }
    if (requestParameters.dryRun !== undefined) {
      queryParameters['dryRun'] = requestParameters.dryRun
    }
    if (requestParameters.fieldManager !== undefined) {
      queryParameters['fieldManager'] = requestParameters.fieldManager
    }
    const headerParameters: runtime.HTTPHeaders = {}

    const response = await this.request({
      path: `/apis/certificates.k8s.io/v1beta1/certificatesigningrequests/{name}/status`.replace(
        `{${'name'}}`,
        encodeURIComponent(String(requestParameters.name))
      ),
      method: 'PUT',
      headers: headerParameters,
      query: queryParameters,
      body: requestParameters.body
    })
    return new runtime.JSONApiResponse<any>(response)
  }

  /**
   * replace status of the specified CertificateSigningRequest
   */
  async replaceCertificateSigningRequestStatus(
    requestParameters: ReplaceCertificateSigningRequestStatusRequest
  ): Promise<V1beta1CertificateSigningRequest> {
    const response = await this.replaceCertificateSigningRequestStatusRaw(requestParameters)
    return await response.value()
  }
}