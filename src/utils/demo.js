/**
 * 构造树型结构数据
 * @param {*} data 数据源
 * @param {*} id id字段 默认 'id'
 * @param {*} parentId 父节点字段 默认 'parentId'
 * @param {*} children 孩子节点字段 默认 'children'
 */
export function handleTree(data, id, parentId, children) {
  /* ES6中 a() || b()  如果执行a()后返回true，则整个表达式返回a()的值，b()不执行；如果执行a()后返回false，则执行b()并返回b()的值  */
  let config = {
    id: id || 'id',
    parentId: parentId || 'parentId',
    childrenList: children || 'children'
  };

  var childrenListMap = {};
  var nodeIds = {};
  var tree = [];

//config数据
  /*
   childrenList: "children"
   id: "deptId"
   parentId: "parentId"*/

//data数据
  /*
   0: {deptId: 100, parentId: 0, ancestors: '0', deptName: 'HP', orderNum: 0, …}
   1: {deptId: 101, parentId: 100, ancestors: '0,100', deptName: '深圳总公司', orderNum: 1, …}
   2: {deptId: 102, parentId: 100, ancestors: '0,100', deptName: '长沙分公司', orderNum: 2, …}
   3: {deptId: 103, parentId: 101, ancestors: '0,100,101', deptName: '研发部门', orderNum: 1, …}
   4: {deptId: 104, parentId: 101, ancestors: '0,100,101', deptName: '市场部门', orderNum: 2, …}
   5: {deptId: 105, parentId: 101, ancestors: '0,100,101', deptName: '测试部门', orderNum: 3, …}
   6: {deptId: 106, parentId: 101, ancestors: '0,100,101', deptName: '财务部门', orderNum: 4, …}
   7: {deptId: 107, parentId: 101, ancestors: '0,100,101', deptName: '运维部门', orderNum: 5, …}
   8: {deptId: 108, parentId: 102, ancestors: '0,100,102', deptName: '市场部门', orderNum: 1, …}
   9: {deptId: 109, parentId: 102, ancestors: '0,100,102', deptName: '财务部门', orderNum: 2, …}
 */

  for (let d of data) {
    //遍历第一次 d
    /*{deptId: 100, parentId: 0, ancestors: '0', deptName: 'HP', orderNum: 0, …}*/
    // let parentId = d['parentId'];
    // parentId=0;
    //-----------------------------------------------------------------------1
    //遍历第二次 d
    //{deptId: 101, parentId: 100, ancestors: '0,100', deptName: '深圳总公司', orderNum: 1, …}
    // let parentId = d['parentId'];
    // parentId=100;
    //-----------------------------------------------------------------------2
    let parentId = d[config.parentId];
    //if (childrenListMap[0] == null) √
    //-----------------------------------------------------------------------1
    //if (childrenListMap[100] == null) √
    //-----------------------------------------------------------------------2
    if (childrenListMap[parentId] == null) {
      //childrenListMap[0] = [];
      //-----------------------------------------------------------------------1
      //childrenListMap[100] = [];
      //-----------------------------------------------------------------------2
      childrenListMap[parentId] = [];
    }
    //d['deptId'] 为100
    //nodeIds[100]=d;
    //-----------------------------------------------------------------------1
    //d['deptId'] 为101
    //nodeIds[101]=d;
    //-----------------------------------------------------------------------2
    nodeIds[d[config.id]] = d;
    // childrenListMap[0].push(d)
    //-----------------------------------------------------------------------1
    // childrenListMap[100].push(d)
    //-----------------------------------------------------------------------2
    childrenListMap[parentId].push(d);

    //最终childrenListMap 目的是将具有相同的parentId的数据集合在一起
    /*
    {0: Array(1), 100: Array(2), 101: Array(5), 102: Array(2)}
     0: Array(1)
       0: {deptId: 100, parentId: 0, ancestors: '0', deptName: 'HP', orderNum: 0, …}
     100: Array(2)
       0: {deptId: 101, parentId: 100, ancestors: '0,100', deptName: '深圳总公司', orderNum: 1, …}
       1: {deptId: 102, parentId: 100, ancestors: '0,100', deptName: '长沙分公司', orderNum: 2, …}
     101: Array(5)
       0: {deptId: 103, parentId: 101, ancestors: '0,100,101', deptName: '研发部门', orderNum: 1, …}
       1: {deptId: 104, parentId: 101, ancestors: '0,100,101', deptName: '市场部门', orderNum: 2, …}
       2: {deptId: 105, parentId: 101, ancestors: '0,100,101', deptName: '测试部门', orderNum: 3, …}
       3: {deptId: 106, parentId: 101, ancestors: '0,100,101', deptName: '财务部门', orderNum: 4, …}
       4: {deptId: 107, parentId: 101, ancestors: '0,100,101', deptName: '运维部门', orderNum: 5, …}
     102: Array(2)
     0: {deptId: 108, parentId: 102, ancestors: '0,100,102', deptName: '市场部门', orderNum: 1, …}
     1: {deptId: 109, parentId: 102, ancestors: '0,100,102', deptName: '财务部门', orderNum: 2, …}
     */

    //最终nodeIds
    /*
    100: {deptId: 100, parentId: 0, ancestors: '0', deptName: 'HP', orderNum: 0, …}
    101: {deptId: 101, parentId: 100, ancestors: '0,100', deptName: '深圳总公司', orderNum: 1, …}
    102: {deptId: 102, parentId: 100, ancestors: '0,100', deptName: '长沙分公司', orderNum: 2, …}
    103: {deptId: 103, parentId: 101, ancestors: '0,100,101', deptName: '研发部门', orderNum: 1, …}
    104: {deptId: 104, parentId: 101, ancestors: '0,100,101', deptName: '市场部门', orderNum: 2, …}
    105: {deptId: 105, parentId: 101, ancestors: '0,100,101', deptName: '测试部门', orderNum: 3, …}
    106: {deptId: 106, parentId: 101, ancestors: '0,100,101', deptName: '财务部门', orderNum: 4, …}
    107: {deptId: 107, parentId: 101, ancestors: '0,100,101', deptName: '运维部门', orderNum: 5, …}
    108: {deptId: 108, parentId: 102, ancestors: '0,100,102', deptName: '市场部门', orderNum: 1, …}
    109: {deptId: 109, parentId: 102, ancestors: '0,100,102', deptName: '财务部门', orderNum: 2, …}
    */
  }
  //tree添加第一级父级节点
  for (let d of data) {
    //查询数据的父节点
    let parentId = d[config.parentId];
    //父节点与所有节点比较,查询关联关系,能找到说明不是该数据不是第一级分界点
    if (nodeIds[parentId] == null) {
      //将没有关联关系的数据添加到tree中,添加第一级父节点
      tree.push(d);
    }
  }
  //遍历tree,查找第一级父节点下的children
  //此时tree数据为
  /* 0: {deptId: 100, parentId: 0, ancestors: '0', deptName: 'HP', orderNum: 0, …}*/
  for (let t of tree) {
    adaptToChildrenList(t);
  }
  //递归遍历
  //添加children
  function adaptToChildrenList(o) {
    if (childrenListMap[o[config.id]] !== null) {
      o[config.childrenList] = childrenListMap[o[config.id]];
    }
    if (o[config.childrenList]) {
      for (let c of o[config.childrenList]) {
        adaptToChildrenList(c);
      }
    }
  }

  return tree;
}



