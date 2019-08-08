import { Component, OnInit, Output, EventEmitter, ViewChild } from '@angular/core';
import { CategoryTreeService } from './category-tree.service';
import { TreeModule, TreeComponent, TreeModel, TreeNode } from 'angular-tree-component';

@Component({
  selector: 'app-category-tree',
  templateUrl: './category-tree.component.html',
  styleUrls: ['./category-tree.component.less']
})
export class CategoryTreeComponent implements OnInit {

  constructor(private categoryTreeService: CategoryTreeService) { }
  @Output() nodeClicked: EventEmitter<any> = new EventEmitter<any>();
  @ViewChild('tree', { static: false }) tree: TreeComponent;

  ngOnInit() {
    this.categoryTreeService.getCategoryTree().subscribe(
      (res: any) => {
        this.nodes = res;
        this.tree.treeModel = res;
        console.log(res);
      }
    )
  }
  nodeClick(node) {
    this.nodeClicked.emit(node);
  }
  searchText: string;
  search(event: any) {
    this.searchText = event.target.value;
    this.tree.treeModel.filterNodes(this.searchText);
  }
  nodes = [];
  options = {};

  //   options = {
  //     useCheckbox: true
  //   };
  //   nodes = [
  //     {
  //       name: 'North America',
  //       children: [
  //         { name: 'United States', children: [
  //           {name: 'New York'},
  //           {name: 'California'},
  //           {name: 'Florida'}
  //         ] },
  //         { name: 'Canada' }
  //       ]
  //     },
  //     {
  //       name: 'South America',
  //       children: [
  //         { name: 'Argentina', children: [] },
  //         { name: 'Brazil' }
  //       ]
  //     },
  //     {
  //       name: 'Europe',
  //       children: [
  //         { name: 'England' },
  //         { name: 'Germany' },
  //         { name: 'France' },
  //         { name: 'Italy' },
  //         { name: 'Spain' }
  //       ]
  //     }
  //   ];
  //   filterFn(value: string, treeModel: TreeModel) {
  //     treeModel.filterNodes((node: TreeNode) => fuzzysearch(value, node.data.name));
  //   }
  // }
  // function fuzzysearch (needle: string, haystack: string) {
  //   const haystackLC = haystack.toLowerCase();
  //   const needleLC = needle.toLowerCase();

  //   const hlen = haystack.length;
  //   const nlen = needleLC.length;

  //   if (nlen > hlen) {
  //     return false;
  //   }
  //   if (nlen === hlen) {
  //     return needleLC === haystackLC;
  //   }
  //   outer: for (let i = 0, j = 0; i < nlen; i++) {
  //     const nch = needleLC.charCodeAt(i);

  //     while (j < hlen) {
  //       if (haystackLC.charCodeAt(j++) === nch) {
  //         continue outer;
  //       }
  //     }
  //     return false;
  //   }
  //   return true;
  // }


}