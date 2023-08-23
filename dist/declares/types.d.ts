type Permissions<Role, Permission> = Record<keyof Role, Permission>

export type User<Role, Permission> = {
  id: string
  name: string
  email: string
  locations: string[]
  permissions: Permissions<Role, Permission>
}

type FilterValue = string | number | boolean
type NumberFilter = {
  value: number
  op: 'eq' | 'ge' | 'le'
}

type StringFilter = {
  value: string
  op: 'eq'
}

type BooleanFilter = {
  value: string | number
  op: 'is'
}

type ListFilter = {
  value: FilterValue[]
  op: 'in'
}

type Filter = FilterValue | FilterValue[] | NumberFilter | StringFilter | BooleanFilter | ListFilter

type Filters<FilteredType> = {[key in keyof Partial<FilteredType> | string]: Filter}

export type BaseListParams<FilteredType> = {
  page?: number
  limit?: number
  filters?: Filters<FilteredType>
}

export type EntityFilters<Entity> = Filters<DbData<Entity>>
export type EntityListParams<Entity> = BaseListParams<DbData<Entity>>

export type DbData<Entity> = Entity & {
  id: string
  createdAt: string
  modifiedAt?: string
}

export type EntityListResponse<Entity> = DbData<Entity>[]

export type EntityItemResponse<Entity> = DbData<Entity>
