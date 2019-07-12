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
import V1beta1MutatingWebhookConfiguration from '../models/V1beta1MutatingWebhookConfiguration'
import V1beta1MutatingWebhookConfigurationList from '../models/V1beta1MutatingWebhookConfigurationList'
import V1beta1ValidatingWebhookConfiguration from '../models/V1beta1ValidatingWebhookConfiguration'
import V1beta1ValidatingWebhookConfigurationList from '../models/V1beta1ValidatingWebhookConfigurationList'

interface CreateMutatingWebhookConfigurationRequest {
  body: V1beta1MutatingWebhookConfiguration
  pretty?: string
  dryRun?: string
  fieldManager?: string
}

interface CreateValidatingWebhookConfigurationRequest {
  body: V1beta1ValidatingWebhookConfiguration
  pretty?: string
  dryRun?: string
  fieldManager?: string
}

interface DeleteCollectionMutatingWebhookConfigurationRequest {
  pretty?: string
  _continue?: string
  fieldSelector?: string
  labelSelector?: string
  limit?: number
  resourceVersion?: string
  timeoutSeconds?: number
}

interface DeleteCollectionValidatingWebhookConfigurationRequest {
  pretty?: string
  _continue?: string
  fieldSelector?: string
  labelSelector?: string
  limit?: number
  resourceVersion?: string
  timeoutSeconds?: number
}

interface DeleteMutatingWebhookConfigurationRequest {
  name: string
  pretty?: string
  dryRun?: string
  gracePeriodSeconds?: number
  orphanDependents?: boolean
  propagationPolicy?: string
  body?: V1DeleteOptions
}

interface DeleteValidatingWebhookConfigurationRequest {
  name: string
  pretty?: string
  dryRun?: string
  gracePeriodSeconds?: number
  orphanDependents?: boolean
  propagationPolicy?: string
  body?: V1DeleteOptions
}

interface ListMutatingWebhookConfigurationRequest {
  pretty?: string
  _continue?: string
  fieldSelector?: string
  labelSelector?: string
  limit?: number
  resourceVersion?: string
  timeoutSeconds?: number
}

interface ListValidatingWebhookConfigurationRequest {
  pretty?: string
  _continue?: string
  fieldSelector?: string
  labelSelector?: string
  limit?: number
  resourceVersion?: string
  timeoutSeconds?: number
}

interface PatchMutatingWebhookConfigurationRequest {
  name: string
  body: object
  pretty?: string
  dryRun?: string
  fieldManager?: string
  force?: boolean
}

interface PatchValidatingWebhookConfigurationRequest {
  name: string
  body: object
  pretty?: string
  dryRun?: string
  fieldManager?: string
  force?: boolean
}

interface ReadMutatingWebhookConfigurationRequest {
  name: string
  pretty?: string
  exact?: boolean
  _export?: boolean
}

interface ReadValidatingWebhookConfigurationRequest {
  name: string
  pretty?: string
  exact?: boolean
  _export?: boolean
}

interface ReplaceMutatingWebhookConfigurationRequest {
  name: string
  body: V1beta1MutatingWebhookConfiguration
  pretty?: string
  dryRun?: string
  fieldManager?: string
}

interface ReplaceValidatingWebhookConfigurationRequest {
  name: string
  body: V1beta1ValidatingWebhookConfiguration
  pretty?: string
  dryRun?: string
  fieldManager?: string
}

/**
 *
 */
export default class AdmissionregistrationV1beta1Api extends runtime.BaseAPI {
  /**
   * create a MutatingWebhookConfiguration
   */
  async createMutatingWebhookConfigurationRaw(
    requestParameters: CreateMutatingWebhookConfigurationRequest
  ): Promise<runtime.ApiResponse<V1beta1MutatingWebhookConfiguration>> {
    if (requestParameters.body === null || requestParameters.body === undefined) {
      throw new Error(
        'Required parameter requestParameters.body was null or undefined when calling createMutatingWebhookConfiguration.'
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
      path: `/apis/admissionregistration.k8s.io/v1beta1/mutatingwebhookconfigurations`,
      method: 'POST',
      headers: headerParameters,
      query: queryParameters,
      body: requestParameters.body
    })
    return new runtime.JSONApiResponse<any>(response)
  }

  /**
   * create a MutatingWebhookConfiguration
   */
  async createMutatingWebhookConfiguration(
    requestParameters: CreateMutatingWebhookConfigurationRequest
  ): Promise<V1beta1MutatingWebhookConfiguration> {
    const response = await this.createMutatingWebhookConfigurationRaw(requestParameters)
    return await response.value()
  }

  /**
   * create a ValidatingWebhookConfiguration
   */
  async createValidatingWebhookConfigurationRaw(
    requestParameters: CreateValidatingWebhookConfigurationRequest
  ): Promise<runtime.ApiResponse<V1beta1ValidatingWebhookConfiguration>> {
    if (requestParameters.body === null || requestParameters.body === undefined) {
      throw new Error(
        'Required parameter requestParameters.body was null or undefined when calling createValidatingWebhookConfiguration.'
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
      path: `/apis/admissionregistration.k8s.io/v1beta1/validatingwebhookconfigurations`,
      method: 'POST',
      headers: headerParameters,
      query: queryParameters,
      body: requestParameters.body
    })
    return new runtime.JSONApiResponse<any>(response)
  }

  /**
   * create a ValidatingWebhookConfiguration
   */
  async createValidatingWebhookConfiguration(
    requestParameters: CreateValidatingWebhookConfigurationRequest
  ): Promise<V1beta1ValidatingWebhookConfiguration> {
    const response = await this.createValidatingWebhookConfigurationRaw(requestParameters)
    return await response.value()
  }

  /**
   * delete collection of MutatingWebhookConfiguration
   */
  async deleteCollectionMutatingWebhookConfigurationRaw(
    requestParameters: DeleteCollectionMutatingWebhookConfigurationRequest
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
      path: `/apis/admissionregistration.k8s.io/v1beta1/mutatingwebhookconfigurations`,
      method: 'DELETE',
      headers: headerParameters,
      query: queryParameters
    })
    return new runtime.JSONApiResponse<any>(response)
  }

  /**
   * delete collection of MutatingWebhookConfiguration
   */
  async deleteCollectionMutatingWebhookConfiguration(
    requestParameters: DeleteCollectionMutatingWebhookConfigurationRequest
  ): Promise<V1Status> {
    const response = await this.deleteCollectionMutatingWebhookConfigurationRaw(requestParameters)
    return await response.value()
  }

  /**
   * delete collection of ValidatingWebhookConfiguration
   */
  async deleteCollectionValidatingWebhookConfigurationRaw(
    requestParameters: DeleteCollectionValidatingWebhookConfigurationRequest
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
      path: `/apis/admissionregistration.k8s.io/v1beta1/validatingwebhookconfigurations`,
      method: 'DELETE',
      headers: headerParameters,
      query: queryParameters
    })
    return new runtime.JSONApiResponse<any>(response)
  }

  /**
   * delete collection of ValidatingWebhookConfiguration
   */
  async deleteCollectionValidatingWebhookConfiguration(
    requestParameters: DeleteCollectionValidatingWebhookConfigurationRequest
  ): Promise<V1Status> {
    const response = await this.deleteCollectionValidatingWebhookConfigurationRaw(requestParameters)
    return await response.value()
  }

  /**
   * delete a MutatingWebhookConfiguration
   */
  async deleteMutatingWebhookConfigurationRaw(
    requestParameters: DeleteMutatingWebhookConfigurationRequest
  ): Promise<runtime.ApiResponse<V1Status>> {
    if (requestParameters.name === null || requestParameters.name === undefined) {
      throw new Error(
        'Required parameter requestParameters.name was null or undefined when calling deleteMutatingWebhookConfiguration.'
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
      path: `/apis/admissionregistration.k8s.io/v1beta1/mutatingwebhookconfigurations/{name}`.replace(
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
   * delete a MutatingWebhookConfiguration
   */
  async deleteMutatingWebhookConfiguration(
    requestParameters: DeleteMutatingWebhookConfigurationRequest
  ): Promise<V1Status> {
    const response = await this.deleteMutatingWebhookConfigurationRaw(requestParameters)
    return await response.value()
  }

  /**
   * delete a ValidatingWebhookConfiguration
   */
  async deleteValidatingWebhookConfigurationRaw(
    requestParameters: DeleteValidatingWebhookConfigurationRequest
  ): Promise<runtime.ApiResponse<V1Status>> {
    if (requestParameters.name === null || requestParameters.name === undefined) {
      throw new Error(
        'Required parameter requestParameters.name was null or undefined when calling deleteValidatingWebhookConfiguration.'
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
      path: `/apis/admissionregistration.k8s.io/v1beta1/validatingwebhookconfigurations/{name}`.replace(
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
   * delete a ValidatingWebhookConfiguration
   */
  async deleteValidatingWebhookConfiguration(
    requestParameters: DeleteValidatingWebhookConfigurationRequest
  ): Promise<V1Status> {
    const response = await this.deleteValidatingWebhookConfigurationRaw(requestParameters)
    return await response.value()
  }

  /**
   * get available resources
   */
  async getAPIResourcesRaw(): Promise<runtime.ApiResponse<V1APIResourceList>> {
    const queryParameters: runtime.HTTPQuery = {}
    const headerParameters: runtime.HTTPHeaders = {}

    const response = await this.request({
      path: `/apis/admissionregistration.k8s.io/v1beta1/`,
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
   * list or watch objects of kind MutatingWebhookConfiguration
   */
  async watchListMutatingWebhookConfiguration(
    requestParameters: ListMutatingWebhookConfigurationRequest,
    callback: (
      event: runtime.KubeEvent<runtime.ItemType<V1beta1MutatingWebhookConfigurationList>>
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

    await this.requestStream<runtime.ItemType<V1beta1MutatingWebhookConfigurationList>>(
      {
        path: `/apis/admissionregistration.k8s.io/v1beta1/mutatingwebhookconfigurations`,
        method: 'GET',
        headers: headerParameters,
        query: queryParameters,
        signal
      },
      callback
    )
  }

  /**
   * list or watch objects of kind MutatingWebhookConfiguration
   */
  async listMutatingWebhookConfigurationRaw(
    requestParameters: ListMutatingWebhookConfigurationRequest
  ): Promise<runtime.ApiResponse<V1beta1MutatingWebhookConfigurationList>> {
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
      path: `/apis/admissionregistration.k8s.io/v1beta1/mutatingwebhookconfigurations`,
      method: 'GET',
      headers: headerParameters,
      query: queryParameters
    })
    return new runtime.JSONApiResponse<any>(response)
  }

  /**
   * list or watch objects of kind MutatingWebhookConfiguration
   */
  async listMutatingWebhookConfiguration(
    requestParameters: ListMutatingWebhookConfigurationRequest
  ): Promise<V1beta1MutatingWebhookConfigurationList> {
    const response = await this.listMutatingWebhookConfigurationRaw(requestParameters)
    return await response.value()
  }

  /**
   * list or watch objects of kind ValidatingWebhookConfiguration
   */
  async watchListValidatingWebhookConfiguration(
    requestParameters: ListValidatingWebhookConfigurationRequest,
    callback: (
      event: runtime.KubeEvent<runtime.ItemType<V1beta1ValidatingWebhookConfigurationList>>
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

    await this.requestStream<runtime.ItemType<V1beta1ValidatingWebhookConfigurationList>>(
      {
        path: `/apis/admissionregistration.k8s.io/v1beta1/validatingwebhookconfigurations`,
        method: 'GET',
        headers: headerParameters,
        query: queryParameters,
        signal
      },
      callback
    )
  }

  /**
   * list or watch objects of kind ValidatingWebhookConfiguration
   */
  async listValidatingWebhookConfigurationRaw(
    requestParameters: ListValidatingWebhookConfigurationRequest
  ): Promise<runtime.ApiResponse<V1beta1ValidatingWebhookConfigurationList>> {
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
      path: `/apis/admissionregistration.k8s.io/v1beta1/validatingwebhookconfigurations`,
      method: 'GET',
      headers: headerParameters,
      query: queryParameters
    })
    return new runtime.JSONApiResponse<any>(response)
  }

  /**
   * list or watch objects of kind ValidatingWebhookConfiguration
   */
  async listValidatingWebhookConfiguration(
    requestParameters: ListValidatingWebhookConfigurationRequest
  ): Promise<V1beta1ValidatingWebhookConfigurationList> {
    const response = await this.listValidatingWebhookConfigurationRaw(requestParameters)
    return await response.value()
  }

  /**
   * partially update the specified MutatingWebhookConfiguration
   */
  async patchMutatingWebhookConfigurationRaw(
    requestParameters: PatchMutatingWebhookConfigurationRequest
  ): Promise<runtime.ApiResponse<V1beta1MutatingWebhookConfiguration>> {
    if (requestParameters.name === null || requestParameters.name === undefined) {
      throw new Error(
        'Required parameter requestParameters.name was null or undefined when calling patchMutatingWebhookConfiguration.'
      )
    }
    if (requestParameters.body === null || requestParameters.body === undefined) {
      throw new Error(
        'Required parameter requestParameters.body was null or undefined when calling patchMutatingWebhookConfiguration.'
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
      path: `/apis/admissionregistration.k8s.io/v1beta1/mutatingwebhookconfigurations/{name}`.replace(
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
   * partially update the specified MutatingWebhookConfiguration
   */
  async patchMutatingWebhookConfiguration(
    requestParameters: PatchMutatingWebhookConfigurationRequest
  ): Promise<V1beta1MutatingWebhookConfiguration> {
    const response = await this.patchMutatingWebhookConfigurationRaw(requestParameters)
    return await response.value()
  }

  /**
   * partially update the specified ValidatingWebhookConfiguration
   */
  async patchValidatingWebhookConfigurationRaw(
    requestParameters: PatchValidatingWebhookConfigurationRequest
  ): Promise<runtime.ApiResponse<V1beta1ValidatingWebhookConfiguration>> {
    if (requestParameters.name === null || requestParameters.name === undefined) {
      throw new Error(
        'Required parameter requestParameters.name was null or undefined when calling patchValidatingWebhookConfiguration.'
      )
    }
    if (requestParameters.body === null || requestParameters.body === undefined) {
      throw new Error(
        'Required parameter requestParameters.body was null or undefined when calling patchValidatingWebhookConfiguration.'
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
      path: `/apis/admissionregistration.k8s.io/v1beta1/validatingwebhookconfigurations/{name}`.replace(
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
   * partially update the specified ValidatingWebhookConfiguration
   */
  async patchValidatingWebhookConfiguration(
    requestParameters: PatchValidatingWebhookConfigurationRequest
  ): Promise<V1beta1ValidatingWebhookConfiguration> {
    const response = await this.patchValidatingWebhookConfigurationRaw(requestParameters)
    return await response.value()
  }

  /**
   * read the specified MutatingWebhookConfiguration
   */
  async readMutatingWebhookConfigurationRaw(
    requestParameters: ReadMutatingWebhookConfigurationRequest
  ): Promise<runtime.ApiResponse<V1beta1MutatingWebhookConfiguration>> {
    if (requestParameters.name === null || requestParameters.name === undefined) {
      throw new Error(
        'Required parameter requestParameters.name was null or undefined when calling readMutatingWebhookConfiguration.'
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
      path: `/apis/admissionregistration.k8s.io/v1beta1/mutatingwebhookconfigurations/{name}`.replace(
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
   * read the specified MutatingWebhookConfiguration
   */
  async readMutatingWebhookConfiguration(
    requestParameters: ReadMutatingWebhookConfigurationRequest
  ): Promise<V1beta1MutatingWebhookConfiguration> {
    const response = await this.readMutatingWebhookConfigurationRaw(requestParameters)
    return await response.value()
  }

  /**
   * read the specified ValidatingWebhookConfiguration
   */
  async readValidatingWebhookConfigurationRaw(
    requestParameters: ReadValidatingWebhookConfigurationRequest
  ): Promise<runtime.ApiResponse<V1beta1ValidatingWebhookConfiguration>> {
    if (requestParameters.name === null || requestParameters.name === undefined) {
      throw new Error(
        'Required parameter requestParameters.name was null or undefined when calling readValidatingWebhookConfiguration.'
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
      path: `/apis/admissionregistration.k8s.io/v1beta1/validatingwebhookconfigurations/{name}`.replace(
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
   * read the specified ValidatingWebhookConfiguration
   */
  async readValidatingWebhookConfiguration(
    requestParameters: ReadValidatingWebhookConfigurationRequest
  ): Promise<V1beta1ValidatingWebhookConfiguration> {
    const response = await this.readValidatingWebhookConfigurationRaw(requestParameters)
    return await response.value()
  }

  /**
   * replace the specified MutatingWebhookConfiguration
   */
  async replaceMutatingWebhookConfigurationRaw(
    requestParameters: ReplaceMutatingWebhookConfigurationRequest
  ): Promise<runtime.ApiResponse<V1beta1MutatingWebhookConfiguration>> {
    if (requestParameters.name === null || requestParameters.name === undefined) {
      throw new Error(
        'Required parameter requestParameters.name was null or undefined when calling replaceMutatingWebhookConfiguration.'
      )
    }
    if (requestParameters.body === null || requestParameters.body === undefined) {
      throw new Error(
        'Required parameter requestParameters.body was null or undefined when calling replaceMutatingWebhookConfiguration.'
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
      path: `/apis/admissionregistration.k8s.io/v1beta1/mutatingwebhookconfigurations/{name}`.replace(
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
   * replace the specified MutatingWebhookConfiguration
   */
  async replaceMutatingWebhookConfiguration(
    requestParameters: ReplaceMutatingWebhookConfigurationRequest
  ): Promise<V1beta1MutatingWebhookConfiguration> {
    const response = await this.replaceMutatingWebhookConfigurationRaw(requestParameters)
    return await response.value()
  }

  /**
   * replace the specified ValidatingWebhookConfiguration
   */
  async replaceValidatingWebhookConfigurationRaw(
    requestParameters: ReplaceValidatingWebhookConfigurationRequest
  ): Promise<runtime.ApiResponse<V1beta1ValidatingWebhookConfiguration>> {
    if (requestParameters.name === null || requestParameters.name === undefined) {
      throw new Error(
        'Required parameter requestParameters.name was null or undefined when calling replaceValidatingWebhookConfiguration.'
      )
    }
    if (requestParameters.body === null || requestParameters.body === undefined) {
      throw new Error(
        'Required parameter requestParameters.body was null or undefined when calling replaceValidatingWebhookConfiguration.'
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
      path: `/apis/admissionregistration.k8s.io/v1beta1/validatingwebhookconfigurations/{name}`.replace(
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
   * replace the specified ValidatingWebhookConfiguration
   */
  async replaceValidatingWebhookConfiguration(
    requestParameters: ReplaceValidatingWebhookConfigurationRequest
  ): Promise<V1beta1ValidatingWebhookConfiguration> {
    const response = await this.replaceValidatingWebhookConfigurationRaw(requestParameters)
    return await response.value()
  }
}