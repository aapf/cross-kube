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

import { KubeObject } from '../runtime'
import V1ObjectMeta from './V1ObjectMeta'
import V1TopologySelectorTerm from './V1TopologySelectorTerm'

/**
 * StorageClass describes the parameters for a class of storage for which PersistentVolumes can be dynamically provisioned.  StorageClasses are non-namespaced; the name of the storage class according to etcd is in ObjectMeta.Name.
 * @export
 * @interface V1StorageClass
 */
export default interface V1StorageClass extends KubeObject {
  /**
   * AllowVolumeExpansion shows whether the storage class allow volume expand
   * @type {boolean}
   * @memberof V1StorageClass
   */
  allowVolumeExpansion?: boolean

  /**
   * Restrict the node topologies where volumes can be dynamically provisioned. Each volume plugin defines its own supported topology specifications. An empty TopologySelectorTerm list means there is no topology restriction. This field is only honored by servers that enable the VolumeScheduling feature.
   * @type {Array<V1TopologySelectorTerm>}
   * @memberof V1StorageClass
   */
  allowedTopologies?: Array<V1TopologySelectorTerm>

  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
   * @type {string}
   * @memberof V1StorageClass
   */
  apiVersion?: string

  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
   * @type {string}
   * @memberof V1StorageClass
   */
  kind?: string

  /**
   *
   * @type {V1ObjectMeta}
   * @memberof V1StorageClass
   */
  metadata?: V1ObjectMeta

  /**
   * Dynamically provisioned PersistentVolumes of this storage class are created with these mountOptions, e.g. [\"ro\", \"soft\"]. Not validated - mount of the PVs will simply fail if one is invalid.
   * @type {Array<string>}
   * @memberof V1StorageClass
   */
  mountOptions?: Array<string>

  /**
   * Parameters holds the parameters for the provisioner that should create volumes of this storage class.
   * @type {{ [key: string]: string; }}
   * @memberof V1StorageClass
   */
  parameters?: { [key: string]: string }

  /**
   * Provisioner indicates the type of the provisioner.
   * @type {string}
   * @memberof V1StorageClass
   */
  provisioner: string

  /**
   * Dynamically provisioned PersistentVolumes of this storage class are created with this reclaimPolicy. Defaults to Delete.
   * @type {string}
   * @memberof V1StorageClass
   */
  reclaimPolicy?: string

  /**
   * VolumeBindingMode indicates how PersistentVolumeClaims should be provisioned and bound.  When unset, VolumeBindingImmediate is used. This field is only honored by servers that enable the VolumeScheduling feature.
   * @type {string}
   * @memberof V1StorageClass
   */
  volumeBindingMode?: string
}
