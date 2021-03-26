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
import EventsV1EventSeries from './EventsV1EventSeries'
import V1EventSource from './V1EventSource'
import V1ObjectMeta from './V1ObjectMeta'
import V1ObjectReference from './V1ObjectReference'

/**
 * Event is a report of an event somewhere in the cluster. It generally denotes some state change in the system.
 * @export
 * @interface EventsV1Event
 */
export default interface EventsV1Event extends KubeObject {
  /**
   * action is what action was taken/failed regarding to the regarding object. It is machine-readable. This field can have at most 128 characters.
   * @type {string}
   * @memberof EventsV1Event
   */
  action?: string

  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
   * @type {string}
   * @memberof EventsV1Event
   */
  apiVersion?: string

  /**
   * deprecatedCount is the deprecated field assuring backward compatibility with core.v1 Event type.
   * @type {number}
   * @memberof EventsV1Event
   */
  deprecatedCount?: number

  /**
   * deprecatedFirstTimestamp is the deprecated field assuring backward compatibility with core.v1 Event type.
   * @type {Date}
   * @memberof EventsV1Event
   */
  deprecatedFirstTimestamp?: Date

  /**
   * deprecatedLastTimestamp is the deprecated field assuring backward compatibility with core.v1 Event type.
   * @type {Date}
   * @memberof EventsV1Event
   */
  deprecatedLastTimestamp?: Date

  /**
   *
   * @type {V1EventSource}
   * @memberof EventsV1Event
   */
  deprecatedSource?: V1EventSource

  /**
   * eventTime is the time when this Event was first observed. It is required.
   * @type {Date}
   * @memberof EventsV1Event
   */
  eventTime: Date

  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
   * @type {string}
   * @memberof EventsV1Event
   */
  kind?: string

  /**
   *
   * @type {V1ObjectMeta}
   * @memberof EventsV1Event
   */
  metadata?: V1ObjectMeta

  /**
   * note is a human-readable description of the status of this operation. Maximal length of the note is 1kB, but libraries should be prepared to handle values up to 64kB.
   * @type {string}
   * @memberof EventsV1Event
   */
  note?: string

  /**
   * reason is why the action was taken. It is human-readable. This field can have at most 128 characters.
   * @type {string}
   * @memberof EventsV1Event
   */
  reason?: string

  /**
   *
   * @type {V1ObjectReference}
   * @memberof EventsV1Event
   */
  regarding?: V1ObjectReference

  /**
   *
   * @type {V1ObjectReference}
   * @memberof EventsV1Event
   */
  related?: V1ObjectReference

  /**
   * reportingController is the name of the controller that emitted this Event, e.g. `kubernetes.io/kubelet`. This field cannot be empty for new Events.
   * @type {string}
   * @memberof EventsV1Event
   */
  reportingController?: string

  /**
   * reportingInstance is the ID of the controller instance, e.g. `kubelet-xyzf`. This field cannot be empty for new Events and it can have at most 128 characters.
   * @type {string}
   * @memberof EventsV1Event
   */
  reportingInstance?: string

  /**
   *
   * @type {EventsV1EventSeries}
   * @memberof EventsV1Event
   */
  series?: EventsV1EventSeries

  /**
   * type is the type of this event (Normal, Warning), new types could be added in the future. It is machine-readable.
   * @type {string}
   * @memberof EventsV1Event
   */
  type?: string
}
