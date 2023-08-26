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

type Field<FilteredType> = keyof Partial<FilteredType> | string

type Filter = FilterValue | FilterValue[] | NumberFilter | StringFilter | BooleanFilter | ListFilter

type Filters<FilteredType> = {field: Field<FilteredType>, value: Filter}[]

type Ordering<FilteredType> = ({field: Field<FilteredType>, direction?: 'asc' | 'desc'} | Field<FilteredType>)[]

export type BaseListParams<FilteredType> = {
  page?: number
  limit?: number
  filters?: Filters<FilteredType>
  ordering?: Ordering<FilteredType>
}

export type EntityFilters<Entity> = Filters<DbData<Entity>>
export type EntityOrdering<Entity> = Ordering<DbData<Entity>>
export type EntityListParams<Entity> = BaseListParams<DbData<Entity>>

export type DbData<Entity> = Entity & {
  id: string
  createdAt: string
  modifiedAt?: string
}

export type EntityListResponse<Entity> = DbData<Entity>[]

export type EntityItemResponse<Entity> = DbData<Entity>

export type EntityUpdateParams<Entity> = Partial<Entity> & {
  id: string
}
