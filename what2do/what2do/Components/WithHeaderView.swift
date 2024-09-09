//
//  WithHeaderView.swift
//  what2do
//
//  Created by Guillem Sardà Parreu on 27/8/24.
//

import SwiftUI

struct WithHeaderView<Children: View>: View {
    @Environment(\.dismiss) private var dismiss
    var translationKey: String
    var hasArrow: Bool?
    let children: Children
    
    init(translationKey: String, hasArrow: Bool? = nil, @ViewBuilder children: () -> Children) {
        self.translationKey = translationKey
        self.hasArrow = hasArrow
        self.children = children()
    }
    
    var body: some View {
        ZStack {
            ZStack {
                
                if hasArrow == true
                {
                    Button (action: {
                        dismiss()
                    }, label: {
                        Image(systemName: "arrowshape.backward.fill")
                            .foregroundColor(Color("ElectricBlue"))
                    })
                    .frame(maxWidth: .infinity, alignment: .leading)
                    .padding(.leading, 25)
                }
                Text(LocalizedStringKey(self.translationKey))
                    .font(.largeTitle)
                    .fontWeight(.bold)
                    .multilineTextAlignment(.center)
            }
            .frame(maxWidth: .infinity, maxHeight: .infinity, alignment: .top)
            .padding(.top, 5)
            .zIndex(1)
            self.children
        }
    }
}

#Preview {
    WithHeaderView(translationKey: "welcome", children: {
        VStack {
            Text("Hello")
            Text("Another child")
        }
        .frame(minWidth: /*@START_MENU_TOKEN@*/0/*@END_MENU_TOKEN@*/, maxWidth: .infinity, minHeight: 0, maxHeight:.infinity)
        .background(.yellow)
    })
}

#Preview {
    WithHeaderView(translationKey: "signIn", hasArrow: true) {
        VStack {
            Text("Hello")
            Text("Another child")
        }
    }
}

